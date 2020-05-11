'use strict';
(function () {
  /* Добавляем обработчик фильтров */
  var allFilters = document.querySelectorAll('.map__filter');


  allFilters.forEach(function (filter) {
    filter.addEventListener('change', function () {
      window.delPins();
      window.templeCard.classList.add('hidden');
      var masss = massFilter();
      window.addNewPins(masss);
      window.genCards(masss);
    });
  });

  var massFilter = function () {
    var massNewPin = window.patronPin;
    for (var i = 0; i < allFilters.length; i++) {
      if (allFilters[i].value !== 'any') {
        if (allFilters[i].name === 'housing-type') {

          massNewPin = massNewPin.filter(function (pin) {
            return pin.offer.type === allFilters[i].options[allFilters[i].selectedIndex].label;
          });
        }

        if (allFilters[i].name === 'housing-price') {
          massNewPin = massNewPin.filter(function (pin) {
            if (allFilters[i].value === 'middle') {
              return pin.offer.price >= 10000 && pin.offer.price <= 50000;
            }
            if (allFilters[i].value === 'low') {
              return pin.offer.price <= 10000;
            }
            if (allFilters[i].value === 'high') {
              return pin.offer.price >= 50000;
            }
            return massNewPin;
          });

        }
        if (allFilters[i].name === 'housing-rooms') {
          massNewPin = massNewPin.filter(function (pin) {
            return pin.offer.rooms === parseInt(allFilters[i].value);
          });
        }

        if (allFilters[i].name === 'housing-guests') {
          massNewPin = massNewPin.filter(function (pin) {
            return pin.offer.guest === parseInt(allFilters[i].value);
          });
        }
      }
    }
    return massNewPin;
  };

  var mapFeatures = document.querySelector('.map__features');
  var mapCheckbox = mapFeatures.querySelectorAll('input[type=checkbox]');

  /* Сформируем массив галочек */

  var genPinFromChecked = function () {
    var massCheckedPin = window.patronPin;

    for (var i = 0; i < mapCheckbox.length; i++) {
      if (mapCheckbox[i].checked) {
        if (mapCheckbox[i].value === 'wifi') {
          massCheckedPin = massCheckedPin.filter(function (pin) {
            return pin.offer.feature[i] === mapCheckbox[i].value;
          });
        }

        if (mapCheckbox[i].value === 'dishwasher') {
          massCheckedPin = massCheckedPin.filter(function (pin) {
            return pin.offer.feature[i] === mapCheckbox[i].value;
          });
        }
        if (mapCheckbox[i].value === 'parking') {
          massCheckedPin = massCheckedPin.filter(function (pin) {
            return pin.offer.feature[i] === mapCheckbox[i].value;
          });
        }

        if (mapCheckbox[i].value === 'washer') {
          massCheckedPin = massCheckedPin.filter(function (pin) {
            return pin.offer.feature[i] === mapCheckbox[i].value;
          });
        }

        if (mapCheckbox[i].value === 'elevator') {
          massCheckedPin = massCheckedPin.filter(function (pin) {
            return pin.offer.feature[i] === mapCheckbox[i].value;
          });
        }

        if (mapCheckbox[i].value === 'conditioner') {
          massCheckedPin = massCheckedPin.filter(function (pin) {
            return pin.offer.feature[i] === mapCheckbox[i].value;
          });
        }
      }
    }
    return massCheckedPin;
  }

  /* Прописываем пины в массив и выводим на карту */
  mapCheckbox.forEach(function (checked) {
    checked.addEventListener('change', function () {
      window.delPins();
      window.templeCard.classList.add('hidden');
      var massItem = genPinFromChecked();
      window.addNewCheckedPins(massItem);
      window.genCards(massItem);
    });
  });

  // mapCheckbox.forEach(function (checkbox) {
  //   checkbox.addEventListener('click', function () {
  //     // massChecked();
  //     if (mapCheckbox.checked) {
  //       console.log('1')
  //     } else {
  //       console.log('2')
  //     }
  //   })
  // });

  // var massChecked = function () {
  //   for (var j = 0; j < mapCheckbox.length; j++) {

  //     if (mapCheckbox[j].value === 'conditioner') {

  //     }

      // if (mapCheckbox[j].value === 'dishwasher') {
      //   massNewPin = massNewPin.filter(function (pin) {
      //     return pin.offer.feature === mapCheckbox[j].options[mapCheckbox[i].selectedIndex].label;
      //   });
      // }

      // if (mapCheckbox[j].value === 'parking') {
      //   massNewPin = massNewPin.filter(function (pin) {
      //     return pin.offer.feature === mapCheckbox[j].options[mapCheckbox[i].selectedIndex].label;
      //   });
      // }

      // if (mapCheckbox[j].value === 'washer') {
      //   massNewPin = massNewPin.filter(function (pin) {
      //     return pin.offer.feature === mapCheckbox[j].options[mapCheckbox[i].selectedIndex].label;
      //   });
      // }

      // if (mapCheckbox[j].value === 'elevator') {
      //   massNewPin = massNewPin.filter(function (pin) {
      //     return pin.offer.feature === mapCheckbox[j].options[mapCheckbox[i].selectedIndex].label;
      //   });
      // }

      // if (mapCheckbox[j].value === 'conditioner') {
      //   massNewPin = massNewPin.filter(function (pin) {
      //     return pin.offer.feature === mapCheckbox[j].options[mapCheckbox[i].selectedIndex].label;
      //   });
      // }
  //   }
  // }


})();
