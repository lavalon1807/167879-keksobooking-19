'use strict';
(function () {
  var templeSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');

  var templeError = document.querySelector('#error')
    .content
    .querySelector('.error');

  var templeErrorButton = templeError.querySelector('.error__button');
  var main = document.querySelector('main');

  var URL = 'https://javascript.pages.academy/keksobooking';

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
        wrightSuccess();
        document.onkeydown = function (evt) {
          window.utilit.isEscEvent(evt, delRight());
        };
        document.addEventListener('click', function () {
          delRight();
        });
      } else {
        wrightError();
        document.onkeydown = function (evt) {
          window.utilit.isEscEvent(evt, delRight());
        };
        templeErrorButton.addEventListener('click', function () {
          delRight();
        });
      }
    });

    xhr.timeout = 10000;

    xhr.open('POST', URL);
    xhr.send(data);
  };

  var fragment = document.createDocumentFragment();

  var wrightSuccess = function () {
    fragment.appendChild(templeSuccess);
    main.appendChild(fragment);
  };

  var wrightError = function () {
    fragment.appendChild(templeError);
    main.appendChild(fragment);
  };

  var delRight = function () {
    templeSuccess.classList.add('hidden');
    templeError.classList.add('hidden');

    templeErrorButton.addEventListener('click', function () {
      templeError.classList.add('hidden');
    });
  };

  var form = document.querySelector('.ad-form');

  form.addEventListener('submit', function (evt) {

    window.upload(new FormData(form), function () {
      window.delPins();
      window.element.active.classList.add('map--faded');
      window.element.adForm.classList.add('ad-form--disabled');
      window.addBlock();
    });
    form.reset();
    evt.preventDefault();
  });
})();
