'use strict';
(function () {
  // RGB-only projection from a real SVG lens anchor. No external requests.
  const canvas = document.getElementById('cinema-rainbow-field');
  const ambient = document.querySelector('.projection-ambient');
  if (!canvas || !ambient || !canvas.getContext) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const scene = document.querySelector('.projection-scene');
  const projector = document.querySelector('.projection-projector');
  const training = document.getElementById('extended-av-training');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const higherContrast = window.matchMedia('(prefers-contrast: more');

  // Exactly three saturated RGB channels: no extra orange, yellow or violet.
  const rgb = [[255, 60, 86], [41, 240, 119], [57, 125, 255]];
  const focusSelectors = [
    '.hero-copy', '.hero-visual', '.section-heading', '.expertise-card',
    '.work-main', '.ai-learning-bar', '.ai-project', '.timeline-item',
    '.career-aside', '.credential', '.training-heading', '.training-entry',
    '.skills-learning > div', '.contact-heading', '.contact-actions',
    '.contact-email', '.contact-email-secondary', '.contact-socials',
    '.site-footer', '.marquee-divider', '.resume-link', '.ai-disclaimer',
    '.work-note', '.career-education', '.brand-usage-note'
  ];
  const focusBlocks = Array.from(document.querySelectorAll(focusSelectors.join(',')));

  let width = 1;
  let height = 1;
  let wantedScroll = 0;
  let shownScroll = 0;
  let wantedSpread = 0;
  let shownSpread = 0;
  let pending = false;

  function clamp(value, low, high) {
    return Math.max(low, Math.min(high, value));
  }
  function rgba(c, alpha) {
    return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
  }

  function lensPoint() {
    if (!scene) return { x: width * .25, y: height * .78 };
    const box = scene.getBoundingClientRect();
    // Scene's cropped viewBox is "835 320 365 270"; lens at (876,456).
    return {
      x: box.left + box.width * (41 / 365),
      y: box.top + box.height * (136 / 270)
    };
  }

  function softHalo(x, y, rx, ry, colour, alpha) {
    if (rx <= 0 || ry <= 0) return;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(rx, ry);
    const light = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    light.addColorStop(0, rgba(colour, alpha));
    light.addColorStop(.45, rgba(colour, alpha * .47));
    light.addColorStop(1, rgba(colour, 0));
    ctx.fillStyle = light;
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function readScroll() {
    const y = Math.max(0, window.scrollY || window.pageYOffset || 0);
    wantedScroll = y / Math.max(1, height);
    if (training) {
      const top = training.getBoundingClientRect().top;
      // Open from focused RGB to full-viewport RGB while training enters.
      // Stays full-screen below this section and reverses on scrolling up.
      wantedSpread = clamp((height * .85 - top) / (height * .65), 0, 1);
    } else {
      wantedSpread = 0;
    }
  }

  function resize() {
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    readScroll();
    schedule();
  }

  function paintLight() {
    ctx.clearRect(0, 0, width, height);
    const point = lensPoint();
    const spread = shownSpread;
    const contrast = higherContrast.matches ? .57 : 1;
    const drift = reducedMotion.matches ? 0 : Math.sin(shownScroll * .74) * width * .045;
    const wave = reducedMotion.matches ? 0 : Math.sin(shownScroll * .55) * height * .075;

    // Subtle free-space glow even before the training section.
    softHalo(point.x, point.y, width * .48, height * .34,
      [166, 225, 241], .06 * contrast);

    // Red, green and blue light rays travel *from the projector lens*.
    // Their endpoints gradually widen to cover the entire screen from the
    // Extended AV Training scroll trigger, with curved feathered edges.
    ctx.save();
    ctx.lineCap = 'round';
    ctx.filter = 'blur(' + Math.round(clamp(width * .045, 15, 27)) + 'px)';
    const beamWidth = clamp(width * (.105 + .34 * spread), 32, 280);
    for (let i = 0; i < rgb.length; i += 1) {
      const narrow = [.08, .26, .44][i];
      const wide = [.09, .50, .91][i];
      const destX = width * (narrow + (wide - narrow) * spread) + drift;
      const destY = height * (.13 + .06 * i) + wave * .6;
      const gradient = ctx.createLinearGradient(
        point.x, point.y, destX, destY
      );
      gradient.addColorStop(0, rgba(rgb[i], .015 * contrast));
      gradient.addColorStop(.25, rgba(rgb[i], .10 * contrast));
      gradient.addColorStop(.68, rgba(rgb[i], (.29 + .07 * spread) * contrast));
      gradient.addColorStop(1, rgba(rgb[i], (.22 + .10 * spread) * contrast));
      ctx.strokeStyle = gradient;
      ctx.lineWidth = beamWidth;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.bezierCurveTo(
        point.x * .82 + width * .025, point.y - height * .28,
        destX * .82 + point.x * .18, destY + height * .11,
        destX, destY
      );
      ctx.stroke();
    }
    ctx.restore();

    // From Extended AV Training onward, blend rich RGB ambient wash across
    // 100% of the viewport, not just a band near the projector.
    if (spread > .001) {
      const positions = [.10, .50, .90];
      for (let i = 0; i < 3; i += 1) {
        softHalo(
          width * positions[i] + drift * .35,
          height * .46 + wave * .4,
          width * .43,
          height * .92,
          rgb[i], (.21 * spread) * contrast
        );
      }
      softHalo(width * .52, height * .50, width * .76,
        height * .73, [150, 179, 226], .042 * spread * contrast);
    }

    // Cinema-style auto-dimmer: feather out the RGB light over actual
    // readable content; leave whitespace illuminated. Foreground DOM
    // content is never edited and every link remains clickable.
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.filter = 'blur(21px)';
    ctx.fillStyle = 'rgba(0,0,0,.93)';
    for (const element of focusBlocks) {
      const b = element.getBoundingClientRect();
      if (b.bottom < -40 || b.top > height + 40 ||
          b.width < 5 || b.height < 5) continue;
      ctx.fillRect(b.left - 9, b.top - 8,
        b.width + 18, b.height + 16);
    }
    ctx.restore();

    // Projector stays visible rather than disappearing behind dark panels.
    // Dim moderately when it overlaps a text/card region.
    if (projector) {
      const p = projector.getBoundingClientRect();
      let blocked = false;
      for (const element of focusBlocks) {
        const b = element.getBoundingClientRect();
        const w = Math.min(p.right, b.right) - Math.max(p.left, b.left);
        const h = Math.min(p.bottom, b.bottom) - Math.max(p.top, b.top);
        if (w > 26 && h > 24 && w * h > p.width * p.height * .25) {
          blocked = true;
          break;
        }
      }
      ambient.style.setProperty('--projector-alpha', blocked ? '.62' : '.91');
    }
  }

  function paintFrame() {
    pending = false;
    if (document.hidden) return;
    const ease = reducedMotion.matches ? 1 : .16;
    shownScroll += (wantedScroll - shownScroll) * ease;
    shownSpread += (wantedSpread - shownSpread) * ease;
    if (Math.abs(wantedScroll - shownScroll) < .006) shownScroll = wantedScroll;
    if (Math.abs(wantedSpread - shownSpread) < .006) shownSpread = wantedSpread;
    paintLight();
    // Only animate during/after interaction; no idle animation loop.
    if (Math.abs(wantedScroll - shownScroll) > .006 ||
        Math.abs(wantedSpread - shownSpread) > .006) schedule();
  }

  function schedule() {
    if (pending || document.hidden) return;
    pending = true;
    window.requestAnimationFrame(paintFrame);
  }

  function onScroll() {
    readScroll();
    schedule();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) { readScroll(); schedule(); }
  });
  if (typeof reducedMotion.addEventListener === 'function') {
    reducedMotion.addEventListener('change', schedule);
    higherContrast.addEventListener('change', schedule);
  }
  resize();
})();
