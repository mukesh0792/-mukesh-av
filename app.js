'use strict';
(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const copyButton = document.getElementById('copy-email');
  const feedback = document.getElementById('copy-feedback');
  if (copyButton && feedback) {
    copyButton.addEventListener('click', async function(){
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
  const menu = document.querySelector('.mobile-nav');
  if (menu) {
    menu.querySelectorAll('nav a').forEach(function(anchor){
      anchor.addEventListener('click', function(){ menu.open = false; });
    });
    document.addEventListener('keydown', function(event){
      if (event.key === 'Escape') menu.open = false;
    });
  }
})();