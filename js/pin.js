'use strict';
(function () {
  var mainPin = document.querySelector('.map__pin--main');
  /* Делаем метку в центре основоположником */
  mainPin.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      window.element.active.classList.remove('map--faded');
      window.removeBlock();
    }
  });

  mainPin.addEventListener('keydown', function (evt) {
    window.utilit.isEnterEvent(evt, window.hiddenActive());
  });

  var URL = 'https://javascript.pages.academy/keksobooking/data';
  /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
  mainPin.onclick = function () {
    window.loadPins(URL, window.successPinsLoad);
    this.onclick = false;
  };

  /* Обнуляем события на движение и отпускание */
  var setZeroMouse = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };

  /* При нажатии кнопки мыши попадаем в эту функцию */
  mainPin.onmousedown = function (evt) {
    var address = document.querySelector('#address');
    window.element.adForm.classList.remove('ad-form--disabled');
    window.templeCard.classList.add('hidden');
    /* Получаем текущие координаты курсора */
    var axis = {
      x: evt.clientX,
      y: evt.clientY
    };

    // Узнаём текущие координаты блока
    var startCoordsBlock = {
      x: mainPin.offsetLeft,
      y: mainPin.offsetTop
    };

    /* Узнаём смещение */
    var delta = {
      x: startCoordsBlock.x - axis.x,
      y: startCoordsBlock.y - axis.y
    };

    /* Узнаем координаты, показанные концом метки*/
    address.value = 'x: ' + Math.floor(startCoordsBlock.x + window.constants.SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(startCoordsBlock.y + window.constants.SIZE_MAIN_PIN_HEIGHT - window.constants.SIZE_MAIN_SKY);

    document.onmousemove = function (e) {
      /* Получаем новые координаты курсора мыши */
      var newAxis = {
        x: e.clientX,
        y: e.clientY
      };

      /* Вычисляем новые координаты блока */
      var endCoordsBlock = {
        x: delta.x + newAxis.x,
        y: delta.y + newAxis.y
      };

      /* Ставим условия выхода за рамки метки*/
      if (endCoordsBlock.x < -33) {
        endCoordsBlock.x = -33;
        setZeroMouse();
      } else if (endCoordsBlock.x > 1167) {
        endCoordsBlock.x = 1167;
        setZeroMouse();
      }

      if (endCoordsBlock.y < 112) {
        endCoordsBlock.y = 112;
        setZeroMouse();
      } else if (endCoordsBlock.y > 612) {
        endCoordsBlock.y = 612;
        setZeroMouse();
      }
      mainPin.style.top = endCoordsBlock.y + 'px';
      mainPin.style.left = endCoordsBlock.x + 'px';
      address.value = 'x: ' + Math.floor(endCoordsBlock.x + window.constants.SIZE_MAIN_PIN_WIDTH / 2) + ' y: ' + Math.floor(endCoordsBlock.y + window.constants.SIZE_MAIN_PIN_HEIGHT - window.constants.SIZE_MAIN_SKY);
    };
  };

  mainPin.onmouseup = function () {
    setZeroMouse(); // При отпускании мыши убираем обработку события движения мыши
  };
})();
