'use strict';

var active = document.querySelector('.map');
active.classList.remove('map--faded');

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

addPins();

var addCards = function () {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(templeCard);

  mapPins.appendChild(fragment);
};

addCards();
