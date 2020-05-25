'use strict';
var active = document.querySelector('.map');
var templeCard = document.querySelector('#card')
  .content
  .querySelector('.map__card');
var cardClose = templeCard.querySelector('.popup__close');

var SIZE_MAIN_PIN_WIDTH = 66;
var SIZE_MAIN_PIN_HEIGHT = 88;
var SIZE_MAIN_SKY = 70;

// /* генерирует случайное число */
// var genNumber = function (min, max) {
//   var rend = Math.floor(Math.random() * (max - min) + min);
//   return rend;
// };

/* Добавляем скрытость сайта*/
active.classList.add('map--faded');

// var removeBlock = function () {
//   for (var i = 0; i < formFields.length; i++) {
//     formFields[i].removeAttribute('disabled', 'false');
//   }
// };

/* Делаем метку в центре основоположником */
var mainPin = document.querySelector('.map__pin--main');

mainPin.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    active.classList.remove('map--faded');
  }
});

mainPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    active.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
  }
});

var adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');
var mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');

/* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
// mainPin.onclick = function () {
//   addPins();
//   this.onclick = false;
// };
/* При нажатии кнопки мыши попадаем в эту функцию */
mainPin.onmousedown = function (evt) {
  var address = document.querySelector('#address');
  adForm.classList.remove('ad-form--disabled');
  templeCard.classList.add('hidden');
  /* Получаем текущие координаты курсора */
  var axis = {
    x: evt.clientX,
    y: evt.clientY
  };

  // Узнаём текущие координаты блока
  var coordsBlock = {
    x: mainPin.offsetLeft,
    y: mainPin.offsetTop
  };

  /* Узнаём смещение */
  var delta = {
    x: coordsBlock.x - axis.x,
    y: coordsBlock.y - axis.y
  };

  /* Узнаем координаты, показанные концом метки*/
  address.value = 'x: ' + Math.floor(coordsBlock.x + SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(coordsBlock.y + SIZE_MAIN_PIN_HEIGHT - SIZE_MAIN_SKY);

  document.onmousemove = function (e) {
    /* Получаем новые координаты курсора мыши */
    var endAxis = {
      x: e.clientX,
      y: e.clientY
    };


    /* Вычисляем новые координаты блока */
    var newCoordsBlock = {
      x: delta.x + endAxis.x,
      y: delta.y + endAxis.y
    };

    /* Ставим условия выхода за рамки метки*/
    if (newCoordsBlock.x < -33) {
      newCoordsBlock.x = -33;
      document.onmousemove = null;
    } else if (newCoordsBlock.x > 1167) {
      newCoordsBlock.x = 1167;
      document.onmousemove = null;
    }

    if (newCoordsBlock.y < 112) {
      newCoordsBlock.y = 112;
      document.onmousemove = null;
    } else if (newCoordsBlock.y > 612) {
      newCoordsBlock.y = 612;
      document.onmousemove = null;
    }
    mainPin.style.top = newCoordsBlock.y + 'px';
    mainPin.style.left = newCoordsBlock.x + 'px';
    address.value = 'x: ' + Math.floor(newCoordsBlock.x + SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(newCoordsBlock.y + SIZE_MAIN_PIN_HEIGHT - SIZE_MAIN_SKY);
  };

  document.onmouseup = function () {
    document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
    document.onmouseup = null;
  };
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
// var addCards = function () {
//   var fragment = document.createDocumentFragment();
//   fragment.appendChild(templeCard);
//   mapPins.appendChild(fragment);
// };
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
