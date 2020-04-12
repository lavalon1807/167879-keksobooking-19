'use strict';

var active = document.querySelector('.map');

var mapPins = document.querySelector('.map__pins');

var templePin = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var picture = templePin.querySelector('img');

var templeCard = document.querySelector('#card')
  .content
  .querySelector('.map__card');

var cardTitle = templeCard.querySelector('.popup__title');
var cardAvatar = templeCard.querySelector('.popup__avatar');
var cardAdress = templeCard.querySelector('.popup__text--address');
var cardPrice = templeCard.querySelector('.popup__text--price');
var cardType = templeCard.querySelector('.popup__type');
var cardCapacity = templeCard.querySelector('.popup__text--capacity');
var cardTime = templeCard.querySelector('.popup__text--time');
var cardFeatures = templeCard.querySelector('.popup__features');

var PIN_MIN_X = 30;
var PIN_MAX_X = 1100;
var PIN_MIN_Y = 130;
var PIN_MAX_Y = 630;
var SIZE_MAIN_PIN_WIDTH = 66;
var SIZE_MAIN_PIN_HEIGHT = 88;
var SIZE_MAIN_SKY = 70;

var TITLES = [
  'Уютное гнездышко для молодоженов',
  'Старая хибара',
  'Пентхаус',
  'Клетка для голубей',
  'Жилье без регистрации и СМС',
  'Сдаю балкон',
  'Комната для интроверта',
  'Юрта для эскимоса'
];

var ADDRESSES = [
  '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Karucha, 15−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Pinocio, 16−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Griodlava, 17−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Soliusha, 18−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Baara, 19−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Uruiochio, 1−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Iclala, 10−3'
];

var PRICE = [
  '1200',
  '2200',
  '3200',
  '4200',
  '5200',
  '6200',
  '7200',
  '8200'
];

var anObj = {
  flat: 'Квартира',
  bungalo: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец'
};

var room = [1, 2, 3, 4, 5, 6, 20, 50];
var guest = [1, 2, 3, 4, 5, 6, 30, 100];

var checkins = ['13:00', '15:00', '17:00', '18:00', '24:00', '22:00', '21:00', '10:00'];
var checkouts = ['12:00', '13:00', '14:00', '15:00', '16:00', '18:00', '11:00', '9:00'];

var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner', 'wifi', 'dishwasher'];

/* генерирует случайное число */
var genNumber = function (min, max) {
  var rend = Math.floor(Math.random() * (max - min) + min);
  return rend;
};

var genKey = function (arr) {
  var arr2 = Object.keys(arr);/* возвращаем массив из собственных свойств */
  var rands = genNumber(0, arr2.length - 1);/* создаем рандом из массива выше */
  var key = arr2[rands]; /* записываем в переменную рандомный элемент массива */
  return key;
};

/* Добавляем скрытость сайта*/
active.classList.add('map--faded');

/* создание массива объектов случайных данных */
var patronPin = [];
var genPin = function () {
  var keys = genKey(anObj); /* вызываем функцию с рандомным элементом из массива и сохраняем в переменную*/
  for (var i = 0; i < 8; i++) {
    var objPin = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: TITLES[i],
        address: ADDRESSES[i],
        price: PRICE[i],
        type: anObj[keys], /* сохраняем в массив из объекта рандом из ключей*/
        rooms: room[i],
        guest: guest[i],
        checkin: checkins[i],
        checkout: checkouts[i],
        feature: features[i],
      }
    };
    patronPin.push(objPin);

  }
  return patronPin;
};

var pins = genPin();

var genTitle = function () {
  var random = genNumber(0, 8);
  var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[random].offer.feature);
  cardTitle.innerText = patronPin[random].offer.title;
  cardAvatar.src = patronPin[random].author.avatar;
  cardAdress.innerText = patronPin[random].offer.address;
  cardPrice.innerText = patronPin[random].offer.price + '₽/ночь';
  cardType.innerText = patronPin[random].offer.type; /* вставляем в разметку рандомный текст*/
  cardCapacity.innerText = patronPin[random].offer.rooms + ' комнаты для ' + patronPin[random].offer.guest + ' гостей';/* Показывает рандом гостей и комнат*/
  cardTime.innerText = 'Заезд после ' + patronPin[random].offer.checkin + ' выезд до ' + patronPin[random].offer.checkout;
  cardFeatures.removeChild(itemFeature);
};

genTitle();

/* генерация меток */
var renderPin = function (data) {
  var copyPin = templePin.cloneNode(true);
  copyPin.style = 'left: ' + genNumber(PIN_MIN_X, PIN_MAX_X) + 'px; top: ' + genNumber(PIN_MIN_Y, PIN_MAX_Y) + 'px';
  picture.src = data.author.avatar;
  picture.alt = data.offer.title;

  return copyPin;
};

/* показывает метки на карте из фрагментов*/
var addPins = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < pins.length; j++) {
    fragment.appendChild(renderPin(pins[j]));
  }
  mapPins.appendChild(fragment);
};

/* делаем для всех полей ввода атрибут disabled*/
var formFields = document.querySelectorAll('fieldset');
var addBlock = function () {
  for (var i = 0; i < formFields.length; i++) {
    formFields[i].setAttribute('disabled', 'true');
  }
}
addBlock();

var removeBlock = function () {
  for (var i = 0; i < formFields.length; i++) {
    formFields[i].removeAttribute('disabled', 'false');
  }
}

/* Делаем метку в центре основоположником */
var mainPin = document.querySelector('.map__pin--main');

mainPin.addEventListener('mousedown', function (evt) {
  if (evt.button == 0) {
    active.classList.remove('map--faded');
    removeBlock();
  }

  // mainPin.addEventListener('mouseup', function (evt) {
  //   if (evt.button == 0) {
  //     active.classList.add('map--faded');
  //   addBlock();
  //   }
  // });
});

mainPin.addEventListener('keydown', function (evt) {
    if (evt.key == 'Enter') {
      active.classList.remove('map--faded');
    }
  });

var adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');
var mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');

/* делаем обработчик перемещения*/

var delta_x = 0;
var delta_y = 0;
  /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */

  /* При нажатии кнопки мыши попадаем в эту функцию */
mainPin.onmousedown = function (evt) {
  var address = document.querySelector('#address');
  adForm.classList.remove('ad-form--disabled');
  /* Получаем текущие координаты курсора */
    var x = evt.pageX;
    var y = evt.pageY;

   // Узнаём текущие координаты блока
  var x_block = mainPin.offsetLeft;
  var y_block = mainPin.offsetTop;
  /* Узнаём смещение */
  delta_x = x_block - x;
  delta_y = y_block - y;
  /* Узнаем координаты, показанные концом метки*/
  // address.value = 'x: ' + Math.floor(delta_x + SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(delta_y + SIZE_MAIN_PIN_HEIGHT);
  address.value = 'x: ' + Math.floor(x_block + SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(y_block + SIZE_MAIN_PIN_HEIGHT - SIZE_MAIN_SKY);
  document.onmousemove = function (evt) {
    /* Получаем новые координаты курсора мыши */

      var x = evt.pageX;
      var y = evt.pageY;

    /* Вычисляем новые координаты блока */
    var new_x = delta_x + x;
    var new_y = delta_y + y;
    /* Ставим условия выхода за рамки метки*/
    if (new_x < -33) {
      new_x = -33;
    } else if (new_x > 1167) {
      new_x = 1167;
    }
    if (new_y < 112) {
      new_y = 112;
    } else if (new_y > 612) {
      new_y = 612;
    }
    mainPin.style.top = new_y + "px";
    mainPin.style.left = new_x + "px";
    address.value = 'x: ' + Math.floor(new_x + SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(new_y + SIZE_MAIN_PIN_HEIGHT - SIZE_MAIN_SKY);
  }
};

mainPin.onmouseup = function (evt) {
  document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
};


/* Делаем валидацию форм для гостей и комнат*/
var room = document.querySelector('#room_number');
var optionRoom = room.querySelectorAll('option');
var sleepPlace = document.querySelector('#capacity');
var optionPlace = sleepPlace.querySelectorAll('option');
optionPlace[2].setAttribute('selected', false);

room.addEventListener('change', function (evt) {
  for (var i = 0; i < optionRoom.length; i++) {
    optionPlace[i].classList.add('hidden');
    if (optionRoom[i].selected === true) {
      optionPlace[i].classList.remove('hidden');
      optionPlace[i].setAttribute('selected', true);
      sleepPlace.value = room.value;
    }
  }
})

// for (var i = 0; i < 4; i++) {
//   var optionRoom = room.querySelectorAll('option')[i];
// }

// optionRoom.addEventListener('click', function (item) {
//   setClassHidden(optionRoom.length);
// })

// function setClassHidden(count) {
//   for (var i = 0; i < count; i++) {
//     room.querySelectorAll('option')[i].classList.add('hidden');
//     if (room.querySelectorAll('option')[i].selected === true) {
//       room.querySelectorAll('option')[i].classList.remove('hidden');
//     }
//   }
// }



  // if (optionRoom.value = 1) {
  //   sleepPlace.value = 1;
  // }

// var addCards = function () {
//   var fragment = document.createDocumentFragment();
//   fragment.appendChild(templeCard);

//   mapPins.appendChild(fragment);
// };

// addCards();
