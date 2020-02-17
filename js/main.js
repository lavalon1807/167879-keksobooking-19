'use strict';

var active = document.querySelector('.map');
active.classList.remove('map--faded');

var mapPins = document.querySelector('.map__pins');
var templePin = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var PIN_MIN_X = 10;
var PIN_MAX_X = 1200;
var PIN_MIN_Y = 130;
var PIN_MAX_Y = 630;
/* Задаем множество разных аватарок */
var patronPin = [];

for (var i = 1; i <= 8; i++) {
  patronPin[i] = {
    author: {
      avatar: 'img/avatars/user0' + (i + 1) + '.png'
    }
  };
}

var picture = templePin.querySelector('img');

/* Генерируем случайное число */

var genNumber = function (min, max) {
  var rend = Math.floor(Math.random() * (max - min) + min);
  return rend;
};


/* Задать координаты метки по X и Y, аватарки */
for (var j = 1; j <= 8; j++) {
  var copyPin = templePin.cloneNode(true);
  mapPins.appendChild(copyPin).style = 'left: ' + genNumber(PIN_MIN_X, PIN_MAX_X) + 'px; top: ' + genNumber(PIN_MIN_Y, PIN_MAX_Y) + 'px';
  picture.setAttribute('src', patronPin[j].author.avatar);
}


