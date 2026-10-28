'use strict';
(function () {
  // RGB-only projection from a real SVG lens anchor. No external requests.
  const canvas = document.getElementById('cinema-rainbow-field');
  const ambient = document.querySelector('.projection-ambient');
  // Projector artwork stays stationary; only this RGB canvas responds to scrolling.
  if (!canvas || !ambient || !canvas.getContext) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const scene = document.querySelector('.projection-scene');
  const training = document.getElementById('extended-av-training');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const higherContrast = window.matchMedia('(prefers-contrast: more)');

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
    // Map the real SVG lens coordinate through the rotated SVG's screen
    // transform. Bounding-box fractions were valid only before rotation.
    if (!scene) return { x: width * .50, y: height * .69 };
    if (typeof scene.createSVGPoint === 'function' &&
        typeof scene.getScreenCTM === 'function') {
      const ctm = scene.getScreenCTM();
      if (ctm) {
        const anchor = scene.createSVGPoint();
        anchor.x = 876;
        anchor.y = 456;
        const screenPoint = anchor.matrixTransform(ctm);
        if (Number.isFinite(screenPoint.x) && Number.isFinite(screenPoint.y)) {
          return { x: screenPoint.x, y: screenPoint.y };
        }
      }
    }
    const box = scene.getBoundingClientRect();
    // Fallback for engines without SVGPoint: rotated housing top-centre.
    return { x: box.left + box.width * .50, y: box.top + box.height * .13 };
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
      // Training triggers a *richer* whole-screen wash; the RGB cone
      // already covers left-to-right at the top on every section.
      // Scrolling up can lower the wash, but NEVER narrow the beam fan.
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
    // Give RGB light priority over the reduced projector on phone screens.
    const mobile = width <= 700 || (width <= 900 && width > height);
    const colourBoost = mobile ? 1.52 : 1;
    const drift = reducedMotion.matches ? 0 : Math.sin(shownScroll * .74) * width * .045;
    const wave = reducedMotion.matches ? 0 : Math.sin(shownScroll * .55) * height * .075;

    // Subtle free-space glow even before the training section.
    softHalo(point.x, point.y, width * .48, height * .34,
      [166, 225, 241], (mobile ? .095 : .06) * contrast);

    // Projector is aimed upward: RGB light fans out from the actual lens.
    // All sections use the SAME full-width top edge, so reverse scrolling
    // never narrows the cone. Extended AV Training only boosts the wash.
    ctx.save();
    ctx.filter = 'blur(' + Math.round(clamp(width * .043, 14, 25)) + 'px)';
    const boost = .83 + .17 * spread;
    const top = -height * .13;
    const outerEdges = [
      [-.15, .41], [.23, .77], [.59, 1.15]
    ];
    for (let i = 0; i < 3; i += 1) {
      const left = width * outerEdges[i][0] + drift * .20;
      const right = width * outerEdges[i][1] + drift * .20;
      const mid = (left + right) * .5;
      const gradient = ctx.createLinearGradient(point.x, point.y, mid, top);
      gradient.addColorStop(0, rgba(rgb[i], .03 * contrast));
      gradient.addColorStop(.27, rgba(rgb[i], .14 * boost * colourBoost * contrast));
      gradient.addColorStop(.69, rgba(rgb[i], .29 * boost * colourBoost * contrast));
      gradient.addColorStop(1, rgba(rgb[i], .23 * boost * colourBoost * contrast));
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.bezierCurveTo(
        point.x - width * .085, point.y - height * .31,
        left, height * .31 + wave * .22,
        left, top
      );
      ctx.lineTo(right, top);
      ctx.bezierCurveTo(
        right, height * .31 + wave * .22,
        point.x + width * .085, point.y - height * .31,
        point.x, point.y
      );
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    // At Extended AV Training add richer RGB halos across the FULL viewport
    // up to the top edge. The fan geometry stays fully wide above training.
    if (spread > .001) {
      const positions = [.10, .50, .90];
      for (let i = 0; i < 3; i += 1) {
        softHalo(
          width * positions[i] + drift * .35,
          height * .46 + wave * .4,
          width * .43,
          height * .92,
          rgb[i], (.21 * spread * colourBoost) * contrast
        );
      }
      // RGB-only illumination; no fourth mixed-color light source.
      // Overlapping three channels naturally creates mixed hues.
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

    // Projector location, rotation and brightness are intentionally static.
    // Scroll updates only the RGB cone, Training wash and focus-area masks.

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
