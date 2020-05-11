'use strict';
(function () {
  window.templeCard = document.querySelector('#card')
  .content
  .querySelector('.map__card');

  var cardTitle = window.templeCard.querySelector('.popup__title');
  var cardAvatar = window.templeCard.querySelector('.popup__avatar');
  var cardAdress = window.templeCard.querySelector('.popup__text--address');
  var cardPrice = window.templeCard.querySelector('.popup__text--price');
  var cardType = window.templeCard.querySelector('.popup__type');
  var cardCapacity = window.templeCard.querySelector('.popup__text--capacity');
  var cardClose = window.templeCard.querySelector('.popup__close');
  var cardFeatures = window.templeCard.querySelectorAll('.popup__feature');
  var listFeatures = window.templeCard.querySelector('.popup__features');

  window.delFeature =  function () {
    listFeatures.innerHTML = '';
  };

  window.addFeature = function (features) {
    for (var i = 0; i < features.length; i++) {
      var creatFeature = document.createElement('li');

      creatFeature.classList.add('popup__feature');
      creatFeature.classList.add('popup__feature--' + features[i]);
      listFeatures.appendChild(creatFeature);
    }
  }

  /* создание массива объектов случайных данных */
  window.patronPin = [];
  window.genPin = function () {
    for (var i = 0; i < 8; i++) {
      var objPin = {
        id: i,
        author: {
          avatar: 'img/avatars/user0' + (i + 1) + '.png'
        },
        offer: {
          title: window.constants.TITLES[i],
          address: window.constants.ADDRESSES[i],
          price: window.constants.PRICE[i],
          type: window.constants.ANOBJ[i], /* сохраняем в массив из объекта рандом из ключей*/
          rooms: window.constants.ROOM[i],
          guest: window.constants.GUEST[i],
          checkin: window.constants.CHECKINS[i],
          checkout: window.constants.CHECKOUTS[i],
          pinX: window.constants.PIN_X[i],
          pinY: window.constants.PIN_Y[i],
          feature: window.constants.FEATURES[i]
        }
      };
      window.patronPin.push(objPin);

    }
    return window.patronPin;
  };

  /* Создаем карточки */
  var addCards = function () {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(window.templeCard);
    window.element.mapPins.appendChild(fragment);
  };

  var getCardForPin = function (pin) {
    var index = pin.classList[2].split('_')[1];
    cardAvatar.src = window.patronPin[index - 1].author.avatar;
    cardTitle.innerText = window.patronPin[index - 1].offer.title;
    cardAdress.innerText = window.patronPin[index - 1].offer.address;
    cardPrice.innerText = window.patronPin[index - 1].offer.price + '₽/ночь';
    cardType.innerText = window.patronPin[index - 1].offer.type;
    cardCapacity.innerText = window.patronPin[index - 1].offer.rooms + ' комнаты для ' + window.patronPin[index - 1].offer.guest + ' гостей';
    window.delFeature();
    addFeature(window.patronPin[index - 1].offer.feature);

    // for (var i = 0; i < cardFeatures.length; i++) {
    //   if (window.patronPin[index - 1].offer.type === 'Квартира') {
    //     if (cardFeatures[i] === cardFeatures[0] || cardFeatures[i] === cardFeatures[3] || cardFeatures[i] === cardFeatures[5]) {
    //       cardFeatures[i].style.display = 'inline-block';
    //     } else {cardFeatures[i].style.display = 'none'}
    //   } else if (window.patronPin[index - 1].offer.type === 'Дом' || window.patronPin[index - 1].offer.type === 'Бунгало') {
    //     if (cardFeatures[i] === cardFeatures[0] || cardFeatures[i] === cardFeatures[3] || cardFeatures[i] === cardFeatures[5] || cardFeatures[i] === cardFeatures[4]) {
    //       cardFeatures[i].style.display = 'inline-block';
    //     } else {cardFeatures[i].style.display = 'none'}
    //   } else if (window.patronPin[index - 1].offer.type === 'Дворец') {
    //     if (cardFeatures[i]) {
    //       cardFeatures[i].style.display = 'inline-block';
    //     } else {cardFeatures[i].style.display = 'none'}
    //   }
    // }

  };

  /* Добавляет карту при нажатии */
  window.genCards = function () {
    var allPin = document.querySelectorAll('.cards');
    allPin.forEach(function (item) {
      item.addEventListener('click', function () {
        addCards();
        window.templeCard.classList.remove('hidden');
        getCardForPin(item);
      });
    });
  };

  /* Закрываем попап с информацией */
  cardClose.onclick = function () {
    window.templeCard.classList.add('hidden');
  };

  var closeCard = function () {
    window.templeCard.classList.add('hidden');
  };

  document.onkeydown = function (evt) {
    window.utilit.isEscEvent(evt, closeCard());
  };

})();
