'use strict';
(function () {
  // Employment history starts in July 2011. The exact day is not publicly
  // established, so the displayed years/months are calendar-month estimates.
  const START_YEAR = 2011;
  const START_MONTH = 7;
  const indiaCalendar = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'numeric'
  });

  function experienceAt(date) {
    const parts = indiaCalendar.formatToParts(date);
    const year = Number(parts.find((part) => part.type === 'year').value);
    const month = Number(parts.find((part) => part.type === 'month').value);
    const totalMonths = Math.max(0, (year - START_YEAR) * 12 + month - START_MONTH);
    return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
  }

  function experienceLabel(experience, format) {
    const { years, months } = experience;
    if (format === 'short') {
      return '≈' + years + ' yrs' + (months ? ' ' + months + ' mos' : '');
    }
    const yearLabel = years + (years === 1 ? ' year' : ' years');
    const monthLabel = months ? ' and ' + months + (months === 1 ? ' month' : ' months') : '';
    return 'approximately ' + yearLabel + monthLabel + ' of technical experience';
  }

  function refreshExperience() {
    const experience = experienceAt(new Date());
    document.querySelectorAll('[data-experience]').forEach((element) => {
      const format = element.getAttribute('data-experience');
      element.textContent = experienceLabel(experience, format);
    });
  }

  if (document.querySelector('[data-experience]')) {
    refreshExperience();
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) refreshExperience();
    });
    // Also handle a tab left open across a month boundary.
    window.setInterval(refreshExperience, 60 * 60 * 1000);
  }

  const year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata', year: 'numeric'
    }).format(new Date()));
  }

  const copyButton = document.getElementById('copy-email');
  const feedback = document.getElementById('copy-feedback');
  if (copyButton && feedback) {
    copyButton.addEventListener('click', async function () {
      const address = 'mukesh.projection@gmail.com';
      if (!navigator.clipboard || !window.isSecureContext) {
        feedback.textContent = 'Copy unavailable. Select the email address above.';
        return;
      }
      try {
        await navigator.clipboard.writeText(address);
        feedback.textContent = 'Email address copied.';
      } catch (_) {
        feedback.textContent = 'Copy unavailable. Select the email address above.';
      }
    });
  }

  // Ambient decorative projection is scroll-driven, never interactive.
  // Reduced-motion preference retains the artwork but disables movement.
  const projectionAmbient = document.querySelector('.projection-ambient');
  if (projectionAmbient) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let framePending = false;
    let lastPhase = '';

    function updateProjection() {
      const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
      const phase = window.scrollY < 48 ? 'idle'
        : progress < 0.30 ? 'rays'
        : progress < 0.65 ? 'bars'
        : 'frame';

      if (phase !== lastPhase) {
        projectionAmbient.setAttribute('data-phase', phase);
        lastPhase = phase;
      }

      // Only a small positional drift; no continuous loop or background work.
      projectionAmbient.style.setProperty(
        '--projection-drift',
        reducedMotion.matches ? '0px' : '-' + Math.round(progress * 22) + 'px'
      );
      framePending = false;
    }

    function scheduleProjectionUpdate() {
      if (!framePending) {
        framePending = true;
        window.requestAnimationFrame(updateProjection);
      }
    }

    window.addEventListener('scroll', scheduleProjectionUpdate, { passive: true });
    window.addEventListener('resize', scheduleProjectionUpdate, { passive: true });
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) scheduleProjectionUpdate();
    });
    if (typeof reducedMotion.addEventListener === 'function') {
      reducedMotion.addEventListener('change', scheduleProjectionUpdate);
    }
    scheduleProjectionUpdate();
  }

  const menu = document.querySelector('.mobile-nav');
  if (menu) {
    menu.querySelectorAll('nav a').forEach(function (anchor) {
      anchor.addEventListener('click', function () { menu.open = false; });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') menu.open = false;
    });
  }
})();
