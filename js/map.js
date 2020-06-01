'use strict';
(function () {

  var mapFilters = document.querySelector('.map__filters');
  /* Добавляем скрытость сайта*/
  window.element.active.classList.add('map--faded');

  /* делаем для всех полей ввода атрибут disabled*/
  var formFields = document.querySelectorAll('fieldset');
  window.addBlock = function () {
    for (var i = 0; i < formFields.length; i++) {
      formFields[i].setAttribute('disabled', 'true');
    }
  };
  window.addBlock();


  window.removeBlock = function () {
    for (var i = 0; i < formFields.length; i++) {
      formFields[i].removeAttribute('disabled', 'false');
    }
  };

  /* Скрываем форму и карту */
  window.hiddenActive = function () {
    window.element.active.classList.remove('map--faded');
    window.element.adForm.classList.remove('ad-form--disabled');
    window.removeBlock();
  };

  window.setTouchOption = function () {
    window.element.adForm.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
  };
  window.setTouchOption();

})();
