'use strict';
(function () {
  document.querySelectorAll('[data-print-resume]').forEach(function (button) {
    button.addEventListener('click', function () { window.print(); });
  });
})();
