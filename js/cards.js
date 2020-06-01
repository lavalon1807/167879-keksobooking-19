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
  var listFeatures = window.templeCard.querySelector('.popup__features');
  var cardDescription = window.templeCard.querySelector('.popup__description');
  var cardPhotos = window.templeCard.querySelector('.popup__photos');


  window.delFeature = function () {
    listFeatures.innerHTML = '';
  };

  window.addFeature = function (pin) {
    for (var i = 0; i < pin.offer.features.length; i++) {
      var creatFeature = document.createElement('li');

      creatFeature.classList.add('popup__feature');
      creatFeature.classList.add('popup__feature--' + pin.offer.features[i]);
      listFeatures.appendChild(creatFeature);
    }
  };

  window.addPopupPhotos = function (pin) {
    cardPhotos.innerHTML = '';
    for (var i = 0; i < pin.offer.photos.length; i++) {
      var creatImg = document.createElement('img');
      creatImg.width = '45';
      creatImg.height = '40';
      creatImg.classList.add('popup__photo');
      creatImg.alt = 'Фотография жилья';
      creatImg.src = pin.offer.photos[i];

      cardPhotos.appendChild(creatImg);
    }
  };

  /* Создаем карточки */
  var addCards = function () {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(window.templeCard);
    window.element.mapPins.appendChild(fragment);
  };

  var getCardForPin = function (pin) {
    cardAvatar.src = pin.author.avatar;
    cardTitle.innerText = pin.offer.title;
    cardAdress.innerText = pin.offer.address;
    cardPrice.innerText = pin.offer.price + '₽/ночь';
    cardType.innerText = pin.offer.type;
    cardCapacity.innerText = pin.offer.rooms + ' комнаты для ' + pin.offer.guests + ' гостей';
    cardTime.innerText = 'Заезд после ' + pin.offer.checkin + ', выезд до ' + pin.offer.checkout;
    cardDescription.innerText = pin.offer.description;
    window.delFeature();
    window.addFeature(pin);
    window.addPopupPhotos(pin);
  };

  /* Добавляет карту при нажатии */
  window.genCards = function (pin) {
    var allPin = document.querySelectorAll('.cards');
    allPin.forEach(function (item, i) {
      item.addEventListener('click', function () {
        addCards();
        window.templeCard.classList.remove('hidden');
        getCardForPin(pin[i]);
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
