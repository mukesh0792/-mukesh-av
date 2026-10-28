'use strict';
(function () {
  // Decorative scroll-responsive projection. No external libraries/network calls.
  const canvas = document.getElementById('cinema-rainbow-field');
  const ambient = document.querySelector('.projection-ambient');
  if (!canvas || !ambient || !canvas.getContext) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const strongerContrast = window.matchMedia('(prefers-contrast: more)');
  const projector = document.querySelector('.projection-projector');
  const scene = document.querySelector('.projection-scene');

  // Only foreground content blocks are dimmed, leaving negative space luminous.
  const focusSelectors = [
    '.hero-copy', '.hero-visual', '.section-heading', '.expertise-card',
    '.work-main', '.ai-learning-bar', '.ai-project', '.timeline-item',
    '.career-aside', '.credential', '.training-entry', '.skills-learning > div',
    '.contact-heading', '.contact-actions', '.contact-email',
    '.contact-email-secondary', '.contact-socials', '.site-footer',
    '.marquee-divider'
  ];
  const focusBlocks = Array.from(document.querySelectorAll(focusSelectors.join(',')));

  const rainbow = [
    [255, 105, 127], [255, 169, 104], [252, 224, 135],
    [139, 232, 160], [103, 218, 228], [136, 175, 249], [185, 148, 232]
  ];

  let width = 0;
  let height = 0;
  let shownScroll = 0;
  let wantedScroll = 0;
  let lastRequestedFrame = 0;
  let pending = false;

  function rgba(rgb, opacity) {
    return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + opacity + ')';
  }

  function resize() {
    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);
    // Cap pixel density to keep GPU/CPU cost predictable on mobile.
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    readScroll();
    requestPaint();
  }

  function readScroll() {
    wantedScroll = Math.max(0, (window.scrollY || window.pageYOffset || 0) /
      Math.max(height, 1));
  }

  function lensPoint() {
    if (!scene) return { x: width * .90, y: height * .70 };
    const bounds = scene.getBoundingClientRect();
    return {
      x: bounds.left + bounds.width * (876 / 1200),
      y: bounds.top + bounds.height * (456 / 720)
    };
  }

  function softHalo(cx, cy, rx, ry, rgb, strength) {
    if (rx <= 0 || ry <= 0) return;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(rx, ry);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    gradient.addColorStop(0, rgba(rgb, strength));
    gradient.addColorStop(.45, rgba(rgb, strength * .39));
    gradient.addColorStop(1, rgba(rgb, 0));
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function paintLight() {
    ctx.clearRect(0, 0, width, height);

    const lens = lensPoint();
    // Non-periodic scroll progression blends with bounded smooth oscillation.
    // No automatic animation: light slides only during/after actual user scroll.
    const wave = motion.matches ? 0 : Math.sin(shownScroll * .70) * height * .18;
    const sweep = motion.matches ? 0 : Math.cos(shownScroll * .39) * width * .12;
    const contrastScale = strongerContrast.matches ? .50 : 1;
    const laneSpacing = Math.min(47, height * .074);
    const beamSize = Math.max(31, Math.min(76, width * .115));
    const room = Math.max(.1, Math.min(1, width / 450));

    // Gentle illumination across the full viewport, including long pages.
    softHalo(width * .29 + sweep * .5, height * .42 + wave * .35,
      width * .69, height * .45, [118, 193, 231], .045 * contrastScale);
    softHalo(width * .65 - sweep * .4, height * .70 - wave * .3,
      width * .53, height * .44, [131, 226, 194], .037 * contrastScale);
    softHalo(lens.x, lens.y, Math.max(140, width * .48),
      height * .39, [230, 245, 250], .055 * contrastScale);

    // A soft seven-colour fan originates at the projector lens. Broad,
    // feathered strokes replace the hard rectangular RGB calibration bars.
    ctx.save();
    ctx.filter = 'blur(' + Math.round(Math.min(28, Math.max(16, width * .045))) + 'px)';
    ctx.lineCap = 'round';
    for (let i = 0; i < rainbow.length; i += 1) {
      const displacement = (i - 3) * laneSpacing;
      const endY = height * .37 + displacement + wave;
      const gradient = ctx.createLinearGradient(lens.x, lens.y, 0, endY);
      gradient.addColorStop(0, rgba(rainbow[i], 0));
      gradient.addColorStop(.23, rgba(rainbow[i], .075 * contrastScale));
      gradient.addColorStop(.67, rgba(rainbow[i], .18 * contrastScale));
      gradient.addColorStop(1, rgba(rainbow[i], .145 * contrastScale));

      ctx.strokeStyle = gradient;
      ctx.lineWidth = beamSize * (room < .75 ? .90 : 1.18);
      ctx.beginPath();
      ctx.moveTo(lens.x - 20, lens.y);
      ctx.bezierCurveTo(
        lens.x * .74, lens.y + displacement * .18 - height * .12,
        width * .30 + sweep, endY - height * .20,
        -width * .15, endY
      );
      ctx.stroke();
    }
    ctx.restore();

    // Auto-dimmer: remove almost all light behind actual readable content.
    // Blurring the mask feathers its edges, like a cinema dimmer, without
    // altering page foreground text, panels, hit areas or contrast.
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.filter = 'blur(20px)';
    ctx.fillStyle = 'rgba(0,0,0,.91)';
    for (const element of focusBlocks) {
      const box = element.getBoundingClientRect();
      if (box.bottom < -35 || box.top > height + 35 ||
          box.width < 5 || box.height < 5) continue;
      ctx.fillRect(box.left - 9, box.top - 7,
        box.width + 18, box.height + 14);
    }
    ctx.restore();

    // The projector remains visible at page corners; soften if it would
    // overlap a foreground block instead of disappearing behind sections.
    if (projector) {
      const box = projector.getBoundingClientRect();
      let blocked = false;
      for (const element of focusBlocks) {
        const a = element.getBoundingClientRect();
        const intersectX = Math.min(box.right, a.right) - Math.max(box.left, a.left);
        const intersectY = Math.min(box.bottom, a.bottom) - Math.max(box.top, a.top);
        if (intersectX > 28 && intersectY > 25 &&
            intersectX * intersectY > box.width * box.height * .23) {
          blocked = true;
          break;
        }
      }
      ambient.style.setProperty('--projector-alpha', blocked ? '.27' : '.56');
    }
  }

  function paintFrame() {
    pending = false;
    if (document.hidden) return;
    const distance = wantedScroll - shownScroll;
    shownScroll += motion.matches ? distance : distance * .15;
    if (Math.abs(distance) < .008) shownScroll = wantedScroll;
    paintLight();
    // Smooth easing ends automatically; nothing runs continuously at rest.
    if (!motion.matches && Math.abs(wantedScroll - shownScroll) > .008) {
      requestPaint();
    }
  }

  function requestPaint() {
    if (pending || document.hidden) return;
    pending = true;
    lastRequestedFrame = window.requestAnimationFrame(paintFrame);
  }

  function onScroll() {
    readScroll();
    requestPaint();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) { readScroll(); requestPaint(); }
  });
  if (typeof motion.addEventListener === 'function') {
    motion.addEventListener('change', requestPaint);
    strongerContrast.addEventListener('change', requestPaint);
  }
  resize();
})();
