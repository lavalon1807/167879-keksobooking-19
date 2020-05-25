'use strict';
(function () {
  var URL = 'https://javascript.pages.academy/keksobooking/data';

  window.loadPins = function (onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      }
    });

    xhr.send();
  };

  window.successPinsLoad = function (pins) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      fragment.appendChild(window.renderPin(pins[i]));
    }

    window.element.mapPins.appendChild(fragment);
    window.genCards(pins);
  };
})();
