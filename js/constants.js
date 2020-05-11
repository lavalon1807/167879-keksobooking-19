'use strict';
(function () {
  window.constants = {
    TITLES: [
      'Уютное гнездышко для молодоженов',
      'Старая хибара',
      'Пентхаус',
      'Клетка для голубей',
      'Жилье без регистрации и СМС',
      'Сдаю балкон',
      'Комната для интроверта',
      'Юрта для эскимоса'
    ],

    ADDRESSES: [
      '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
      '102-0082 Tōkyō-to, Chiyoda-ku, Karucha, 15−3',
      '102-0082 Tōkyō-to, Chiyoda-ku, Pinocio, 16−3',
      '102-0082 Tōkyō-to, Chiyoda-ku, Griodlava, 17−3',
      '102-0082 Tōkyō-to, Chiyoda-ku, Soliusha, 18−3',
      '102-0082 Tōkyō-to, Chiyoda-ku, Baara, 19−3',
      '102-0082 Tōkyō-to, Chiyoda-ku, Uruiochio, 1−3',
      '102-0082 Tōkyō-to, Chiyoda-ku, Iclala, 10−3'
    ],

    PRICE: [
      '1200',
      '2200',
      '47000',
      '144200',
      '5200',
      '26200',
      '57200',
      '10200'
    ],

    ANOBJ: [
      'Квартира',
      'Квартира',
      'Дом',
      'Дворец',
      'Квартира',
      'Бунгало',
      'Дом',
      'Квартира'
    ],

    ROOM: [1, 2, 10, 100, 3, 6, 20, 5],
    GUEST: [1, 2, 15, 0, 3, 6, 30, 5],

    CHECKINS: ['13:00', '15:00', '17:00', '18:00', '24:00', '22:00', '21:00', '10:00'],
    CHECKOUTS: ['12:00', '13:00', '14:00', '15:00', '16:00', '18:00', '11:00', '9:00'],

    FEATURES:[
      ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'],
      ['wifi', 'dishwasher', 'parking', 'washer'],
      ['wifi', 'dishwasher', 'parking'],
      ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'],
      ['wifi', 'dishwasher', 'parking', 'washer'],
      ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'],
    ],


    MINPRICE: ['0', '1000', '5000', '10000'],

    PIN_X: [1100, 945, 101, 40, 301, 454, 666, 784],
    PIN_Y: [630, 170, 310, 455, 501, 499, 200, 389],
    SIZE_MAIN_PIN_WIDTH: 66,
    SIZE_MAIN_PIN_HEIGHT: 88,
    SIZE_MAIN_SKY: 70
  };
})();
