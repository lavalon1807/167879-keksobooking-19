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
var cardClose = templeCard.querySelector('.popup__close');

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

var anObj = [
  'Квартира',
  'Бунгало',
  'Дом',
  'Дворец',
  'Квартира',
  'Бунгало',
  'Дом',
  'Дворец'
];

var room = [1, 2, 3, 4, 5, 6, 20, 50];
var guest = [1, 2, 3, 4, 5, 6, 30, 100];

var checkins = ['13:00', '15:00', '17:00', '18:00', '24:00', '22:00', '21:00', '10:00'];
var checkouts = ['12:00', '13:00', '14:00', '15:00', '16:00', '18:00', '11:00', '9:00'];

var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner', 'wifi', 'dishwasher'];
var avatarPins = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png'
];
/* генерирует случайное число */
var genNumber = function (min, max) {
  var rend = Math.floor(Math.random() * (max - min) + min);
  return rend;
};

// var genKey = function (arr) {
//   var arr2 = Object.keys(arr);/* возвращаем массив из собственных свойств */
//   var rands = genNumber(0, arr2.length - 1);/* создаем рандом из массива выше */
//   var key = arr2[rands]; /* записываем в переменную рандомный элемент массива */
//   return key;
// };

/* Добавляем скрытость сайта*/
active.classList.add('map--faded');

/* создание массива объектов случайных данных */
var patronPin = [];
var genPin = function () {
  // var keys = genKey(anObj); /* вызываем функцию с рандомным элементом из массива и сохраняем в переменную*/
  for (var i = 0; i < 8; i++) {
    var objPin = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: TITLES[i],
        address: ADDRESSES[i],
        price: PRICE[i],
        type: anObj[i], /* сохраняем в массив из объекта рандом из ключей*/
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
// var genTitle = function () {
//   var random = genNumber(0, 8);
//   var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[random].offer.feature);
//

//   cardFeatures.
//   cardAdress.innerText = patronPin[random].offer.address;
//   cardPrice.innerText = patronPin[random].offer.price + '₽/ночь';
//   cardType.innerText = patronPin[random].offer.type; /* вставляем в разметку рандомный текст*/
//   cardCapacity.innerText = patronPin[random].offer.rooms + ' комнаты для ' + patronPin[random].offer.guest + ' гостей';/* Показывает рандом гостей и комнат*/
//   cardTime.innerText = 'Заезд после ' + patronPin[random].offer.checkin + ' выезд до ' + patronPin[random].offer.checkout;
// };

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
  var buttonPins = mapPins.querySelectorAll('button[type="button"]');
  for (var i = 0; i < 8; i++) {
    buttonPins[i].classList.add('ggg_' + i);
    buttonPins[i].classList.add('ggg');
  }

  /* Адаптируем верстку */

  var allPinsggg = document.querySelectorAll('.ggg');
  allPinsggg.forEach(function (item) {
    item.addEventListener('click', function () {
      addCards();
      templeCard.classList.remove('hidden');
      var index = item.classList[1].split('_')[1];
      cardTitle.innerText = patronPin[index].offer.title;
      cardAvatar.src = patronPin[index - 1].author.avatar;
    });
  });
  /* -------------------- */
/*
  var ttt = document.querySelector('.ggg0');
  ttt.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user08.png';
    // cardTitle.innerText = patronPin[0].offer.title;
    cardAdress.innerText = patronPin[0].offer.address;
    cardPrice.innerText = patronPin[0].offer.price + '₽/ночь';
    cardType.innerText = patronPin[0].offer.type;
    cardCapacity.innerText = patronPin[0].offer.rooms + ' комнаты для ' + patronPin[0].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[0].offer.checkin + ' выезд до ' + patronPin[0].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[0].offer.feature);
    cardFeatures.removeChild(itemFeature);
  });
  var ttt1 = document.querySelector('.ggg1');
  ttt1.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user01.png';
    // cardTitle.innerText = patronPin[1].offer.title;
    cardAdress.innerText = patronPin[1].offer.address;
    cardPrice.innerText = patronPin[1].offer.price + '₽/ночь';
    cardType.innerText = patronPin[1].offer.type;
    cardCapacity.innerText = patronPin[1].offer.rooms + ' комнаты для ' + patronPin[1].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[1].offer.checkin + ' выезд до ' + patronPin[1].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[1].offer.feature);
    cardFeatures.removeChild(itemFeature);
  });
  var ttt2 = document.querySelector('.ggg2');
  ttt2.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user02.png';
    // cardTitle.innerText = patronPin[2].offer.title;
    cardAdress.innerText = patronPin[2].offer.address;
    cardPrice.innerText = patronPin[2].offer.price + '₽/ночь';
    cardType.innerText = patronPin[2].offer.type;
    cardCapacity.innerText = patronPin[2].offer.rooms + ' комнаты для ' + patronPin[2].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[2].offer.checkin + ' выезд до ' + patronPin[2].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[0].offer.feature);
    cardFeatures.appendChild(itemFeature);
  });
  var ttt3 = document.querySelector('.ggg3');
  ttt3.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user03.png';
    // cardTitle.innerText = patronPin[3].offer.title;
    cardAdress.innerText = patronPin[3].offer.address;
    cardPrice.innerText = patronPin[3].offer.price + '₽/ночь';
    cardType.innerText = patronPin[3].offer.type;
    cardCapacity.innerText = patronPin[3].offer.rooms + ' комнаты для ' + patronPin[3].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[3].offer.checkin + ' выезд до ' + patronPin[3].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[1].offer.feature);
    cardFeatures.appendChild('before', itemFeature);
  });
  var ttt4 = document.querySelector('.ggg4');
  ttt4.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user04.png';
    // cardTitle.innerText = patronPin[4].offer.title;
    cardAdress.innerText = patronPin[4].offer.address;
    cardPrice.innerText = patronPin[4].offer.price + '₽/ночь';
    cardType.innerText = patronPin[4].offer.type;
    cardCapacity.innerText = patronPin[4].offer.rooms + ' комнаты для ' + patronPin[4].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[4].offer.checkin + ' выезд до ' + patronPin[4].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[3].offer.feature);
    cardFeatures.appendChild(itemFeature);
  });
  var ttt5 = document.querySelector('.ggg5');
  ttt5.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user05.png';
    // cardTitle.innerText = patronPin[5].offer.title;
    cardAdress.innerText = patronPin[5].offer.address;
    cardPrice.innerText = patronPin[5].offer.price + '₽/ночь';
    cardType.innerText = patronPin[5].offer.type;
    cardCapacity.innerText = patronPin[5].offer.rooms + ' комнаты для ' + patronPin[5].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[5].offer.checkin + ' выезд до ' + patronPin[5].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[3].offer.feature);
    cardFeatures.removeChild(itemFeature);
  });
  var ttt6 = document.querySelector('.ggg6');
  ttt6.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user06.png';
    // cardTitle.innerText = patronPin[6].offer.title;
    cardAdress.innerText = patronPin[6].offer.address;
    cardPrice.innerText = patronPin[6].offer.price + '₽/ночь';
    cardType.innerText = patronPin[6].offer.type;
    cardCapacity.innerText = patronPin[6].offer.rooms + ' комнаты для ' + patronPin[6].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[6].offer.checkin + ' выезд до ' + patronPin[6].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[6].offer.feature);
    cardFeatures.addChild(itemFeature);
  });

  var ttt7 = document.querySelector('.ggg7');
  ttt7.addEventListener('click', function () {
    // addCards();
    // templeCard.classList.remove('hidden');
    cardAvatar.src = 'img/avatars/user07.png';
    // cardTitle.innerText = patronPin[7].offer.title;
    cardAdress.innerText = patronPin[7].offer.address;
    cardPrice.innerText = patronPin[7].offer.price + '₽/ночь';
    cardType.innerText = patronPin[7].offer.type;
    cardCapacity.innerText = patronPin[7].offer.rooms + ' комнаты для ' + patronPin[7].offer.guest + ' гостей';
    cardTime.innerText = 'Заезд после ' + patronPin[7].offer.checkin + ' выезд до ' + patronPin[7].offer.checkout;
    var itemFeature = templeCard.querySelector('.popup__feature--' + patronPin[7].offer.feature);
    cardFeatures.removeChild(itemFeature);
  });*/
};


/* делаем для всех полей ввода атрибут disabled*/
var formFields = document.querySelectorAll('fieldset');
var addBlock = function () {
  for (var i = 0; i < formFields.length; i++) {
    formFields[i].setAttribute('disabled', 'true');
  }
};

addBlock();

var removeBlock = function () {
  for (var i = 0; i < formFields.length; i++) {
    formFields[i].removeAttribute('disabled', 'false');
  }
};

/* Делаем метку в центре основоположником */
var mainPin = document.querySelector('.map__pin--main');

mainPin.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    active.classList.remove('map--faded');
    removeBlock();
  }
});

mainPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    active.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    removeBlock();
  }
});

var adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');
var mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');

/* делаем обработчик перемещения*/
var deltaX = 0;
var deltaY = 0;
/* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
mainPin.onclick = function () {
  addPins();
  this.onclick = false;
};
/* При нажатии кнопки мыши попадаем в эту функцию */
mainPin.onmousedown = function (evt) {
  var address = document.querySelector('#address');
  adForm.classList.remove('ad-form--disabled');
  templeCard.classList.add('hidden');
  /* Получаем текущие координаты курсора */
  var axisX = evt.pageX;
  var axisY = evt.pageY;

  // Узнаём текущие координаты блока
  var Xblock = mainPin.offsetLeft;
  var Yblock = mainPin.offsetTop;
  /* Узнаём смещение */
  deltaX = Xblock - axisX;
  deltaY = Yblock - axisY;
  /* Узнаем координаты, показанные концом метки*/
  address.value = 'x: ' + Math.floor(Xblock + SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(Yblock + SIZE_MAIN_PIN_HEIGHT - SIZE_MAIN_SKY);

  document.onmousemove = function (e) {
    /* Получаем новые координаты курсора мыши */
    var x = e.pageX;
    var y = e.pageY;

    /* Вычисляем новые координаты блока */
    var newX = deltaX + x;
    var newY = deltaY + y;
    /* Ставим условия выхода за рамки метки*/
    if (newX < -33) {
      newX = -33;
    } else if (newX > 1167) {
      newX = 1167;
    }
    if (newY < 112) {
      newY = 112;
    } else if (newY > 612) {
      newY = 612;
    }
    mainPin.style.top = newY + 'px';
    mainPin.style.left = newX + 'px';
    address.value = 'x: ' + Math.floor(newX + SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(newY + SIZE_MAIN_PIN_HEIGHT - SIZE_MAIN_SKY);
  };
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
