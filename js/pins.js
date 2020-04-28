'use strict';
(function () {
  var pins = window.genPin();
  var templePin = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

  /* генерация меток */
  var renderPin = function (data, index) {
    var copyPin = templePin.cloneNode(true);
    copyPin.classList.add('cards');
    copyPin.classList.add('card_' + (index + 1));
    copyPin.style = 'left: ' + window.utilit.genNumber(window.constants.PIN_MIN_X, window.constants.PIN_MAX_X) + 'px; top: ' + window.utilit.genNumber(window.constants.PIN_MIN_Y, window.constants.PIN_MAX_Y) + 'px';
    var imgPin = copyPin.querySelector('img');
    imgPin.src = data.author.avatar;
    imgPin.alt = data.offer.title;
    return copyPin;
  };

  /* показывает метки на карте из фрагментов */
  window.addPins = function () {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < pins.length; j++) {
      fragment.appendChild(renderPin(pins[j], j));
    }
    window.element.mapPins.appendChild(fragment);
  };
})();
