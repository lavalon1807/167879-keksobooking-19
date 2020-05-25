'use strict';
window.utilit = (function () {
  /* генерирует случайное число */
  return {
    isEscEvent: function (evt, action) {
      if (evt.key === 'ESC_KEY') {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === 'ENTER_KEY') {
        action();
      }
    }
  };
})();
