'use strict';
(function () {
  var templePin = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

  /* генерация меток */
  window.renderPin = function (data) {
    var copyPin = templePin.cloneNode(true);
    copyPin.classList.add('cards');
    copyPin.style = 'left: ' + data.location.x + 'px; top: ' + data.location.y + 'px';
    var imgPin = copyPin.querySelector('img');
    imgPin.src = data.author.avatar;
    imgPin.alt = data.offer.title;
    return copyPin;
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

  window.hidePins = function () {
    var allPin = document.querySelectorAll('.cards');
    for (var p = 0; p < allPin.length; p++) {
      allPin[p].classList.add('hidden');
    }
  };

  window.showPins = function () {
    var allPin = document.querySelectorAll('.cards');
    for (var p = 0; p < allPin.length; p++) {
      allPin[p].classList.remove('hidden');
    }
  };

  /* показывает метки от фильтра */
  window.addNewPins = function (masspins) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < masspins.length; j++) {
      fragment.appendChild(window.renderPin(masspins[j]));
    }
    window.element.mapPins.appendChild(fragment);
    window.genCards(masspins);
  };
})();
