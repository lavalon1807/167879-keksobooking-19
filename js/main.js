'use strict';
window.element = (function () {
  return {
    active: document.querySelector('.map'),
    adForm: document.querySelector('.ad-form'),
    mapPins: document.querySelector('.map__pins')
  };
<<<<<<< HEAD
})();
=======
};

mainPin.onmouseup = function () {
  document.onmousemove = false; // При отпускании мыши убираем обработку события движения мыши
};

/* Закрываем попап с информацией */
cardClose.onclick = function () {
  templeCard.classList.add('hidden');
};

document.onkeydown = function (evt) {
  if (evt.keyCode === 27) {
    templeCard.classList.add('hidden');
  }
};

/* Создаем карточки */
var addCards = function () {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(templeCard);
  mapPins.appendChild(fragment);
};
/* Делаем валидацию */

/* Делаем валидацию форм для гостей и комнат*/
var roomNumber = document.querySelector('#room_number');
var optionRoom = roomNumber.querySelectorAll('option');
var sleepPlace = document.querySelector('#capacity');
var optionPlace = sleepPlace.querySelectorAll('option');
sleepPlace.setAttribute('selected', false);

roomNumber.addEventListener('change', function () {
  for (var i = 0; i < optionRoom.length; i++) {
    optionPlace[i].classList.add('hidden');
    optionPlace[i].classList.add('hidden');
    if (optionRoom[i].selected === true) {
      optionPlace[i].classList.remove('hidden');
      optionPlace[i].setAttribute('selected', true);
      sleepPlace.value = roomNumber.value;
    }
  }
});

/* Делаем валидацию на Заголовок объявления */
var titleForm = adForm.querySelector('#title');

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
var priceForm = adForm.querySelector('#price');
var typeForm = adForm.querySelector('#type');
var optionType = typeForm.querySelectorAll('option');
var minPrice = [
  '0',
  '1000',
  '5000',
  '10000'
];

typeForm.addEventListener('change', function () {
  for (var i = 0; i < optionType.length; i++) {
    if (optionType[i].selected === true) {
      priceForm.setAttribute('min', minPrice[i]);
    }
  }
});

/* Делаем валидацию заезда и выезда */
var timeinForm = adForm.querySelector('#timein');
var timeoutForm = adForm.querySelector('#timeout');

timeinForm.addEventListener('change', function () {
  timeoutForm.value = timeinForm.value;
});

timeoutForm.addEventListener('change', function () {
  timeinForm.value = timeoutForm.value;
});
>>>>>>> 29b7cfb0c347fc364c340741577414dd2b13e294
