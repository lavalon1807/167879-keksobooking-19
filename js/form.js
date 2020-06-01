'use strict';
(function () {
  var roomNumber = document.querySelector('#room_number');
  var sleepPlace = document.querySelector('#capacity');
  var titleForm = document.querySelector('#title');
  var priceForm = document.querySelector('#price');
  var typeForm = document.querySelector('#type');
  var optionType = typeForm.querySelectorAll('option');
  var timeinForm = document.querySelector('#timein');
  var timeoutForm = document.querySelector('#timeout');

  /* Делаем валидацию форм для гостей и комнат*/
  roomNumber.addEventListener('change', function () {
    sleepPlace.value = roomNumber.value;
  });

  sleepPlace.addEventListener('change', function () {
    roomNumber.value = sleepPlace.value;
  });

  /* Делаем валидацию на Заголовок объявления */
  titleForm.addEventListener('invalid', function () {
    if (titleForm.validity.tooShort) {
      titleForm.setCustomValidity('Имя должно состоять минимум из 30-ти символов!');
    } else if (titleForm.validity.tooLong) {
      titleForm.setCustomValidity('Имя должно состоять максимум 100 символов!');
    } else if (titleForm.validity.valueMissing) {
      titleForm.setCustomValidity('Обязательное поле!');
    } else {
      titleForm.setCustomValidity('');
    }
  });

  /* Делаем валидацию на цена и место*/
  typeForm.addEventListener('change', function () {
    for (var i = 0; i < optionType.length; i++) {
      if (optionType[i].selected === true) {
        priceForm.setAttribute('min', window.constants.MINPRICE[i]);
      }
    }
  });

  /* Делаем валидацию заезда и выезда */
  timeinForm.addEventListener('change', function () {
    timeoutForm.value = timeinForm.value;
  });

  timeoutForm.addEventListener('change', function () {
    timeinForm.value = timeoutForm.value;
  });
})();
