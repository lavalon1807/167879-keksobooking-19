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
  var cardTime = window.templeCard.querySelector('.popup__text--time');
  var cardClose = window.templeCard.querySelector('.popup__close');

  /* создание массива объектов случайных данных */
  var patronPin = [];
  window.genPin = function () {
    for (var i = 0; i < 8; i++) {
      var objPin = {
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
          feature: window.constants.FEATURES[i],
        }
      };
      patronPin.push(objPin);

    }
    return patronPin;
  };

  /* Создаем карточки */
  var addCards = function () {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(window.templeCard);
    window.element.mapPins.appendChild(fragment);
  };

  /* Добавляет карту при нажатии */

  window.genCards = function () {
    var allPin = document.querySelectorAll('.cards');

    allPin.forEach(function (item) {
      item.addEventListener('click', function () {
        addCards();
        window.templeCard.classList.remove('hidden');
        var index = item.classList[2].split('_')[1];
        cardAvatar.src = patronPin[index - 1].author.avatar;
        cardTitle.innerText = patronPin[index - 1].offer.title;
        cardAdress.innerText = patronPin[index - 1].offer.address;
        cardPrice.innerText = patronPin[index - 1].offer.price + '₽/ночь';
        cardType.innerText = patronPin[index - 1].offer.type;
        cardCapacity.innerText = patronPin[index - 1].offer.rooms + ' комнаты для ' + patronPin[index - 1].offer.guest + ' гостей';
        cardTime.innerText = 'Заезд после ' + patronPin[index - 1].offer.checkin + ' выезд до ' + patronPin[index - 1].offer.checkout;
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
