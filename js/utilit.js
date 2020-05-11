'use strict';
window.utilit = (function () {
  // var ESC_KEY = 'Escape';
  // var ENTER_KEY = 'Enter';
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
