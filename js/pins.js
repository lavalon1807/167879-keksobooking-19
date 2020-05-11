'use strict';
(function () {
  var pins = window.genPin();
  var templePin = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

  /* генерация меток */
  var renderPin = function (data) {
    var copyPin = templePin.cloneNode(true);
    copyPin.classList.add('cards');
    copyPin.classList.add('card_' + (data.id + 1));
    copyPin.style = 'left: ' + window.patronPin[data.id].offer.pinX + 'px; top: ' + window.patronPin[data.id].offer.pinY + 'px';
    var imgPin = copyPin.querySelector('img');
    imgPin.src = data.author.avatar;
    imgPin.alt = data.offer.title;
    return copyPin;
  };

  /* показывает метки на карте из фрагментов */
  var fragment = document.createDocumentFragment();
  window.addPins = function () {
    for (var j = 0; j < pins.length; j++) {
      fragment.appendChild(renderPin(pins[j]));
    }
    window.element.mapPins.appendChild(fragment);
  };

  /* Удаляет метки */
  window.delPins = function () {
    var allPin = document.querySelectorAll('.cards');
    for (var p = 0; p < allPin.length; p++) {
      if (allPin !== null) {
        window.element.mapPins.removeChild(allPin[p]);
      }
    }
  };

  /* показывает метки от фильтра */
  window.addNewPins = function (masspins) {
    for (var j = 0; j < masspins.length; j++) {
      fragment.appendChild(renderPin(masspins[j], j));
    }
    window.element.mapPins.appendChild(fragment);
  };

  window.addNewCheckedPins = function (maschecked) {
    for (var j = 0; j < maschecked.length; j++) {
      fragment.appendChild(renderPin(maschecked[j], j));
    }
    window.element.mapPins.appendChild(fragment);
  }
})();
