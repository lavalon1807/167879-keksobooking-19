'use strict';
(function () {
  /* Добавляем обработчик фильтров */
  var allFilters = document.querySelectorAll('.map__filter');
  var mapFeatures = document.querySelector('.map__features');
  var mapCheckbox = mapFeatures.querySelectorAll('input[type=checkbox]');
  var DEBOUNCE_INTERVAL = 400;

  var debounce = function (cd) {
    window.setTimeout(function () {
      window.addNewPins(cd);
    }, DEBOUNCE_INTERVAL);
  };

  allFilters.forEach(function (filter) {
    filter.addEventListener('change', function () {
      window.delPins();
      window.templeCard.classList.add('hidden');
      var masss = massFilter();
      debounce((masss));
      window.genCards(masss);
    });
  });

  var massFilter = function () {
    var massNewPin = window.savePins;
    for (var i = 0; i < allFilters.length; i++) {
      if (allFilters[i].value !== 'any') {
        if (allFilters[i].name === 'housing-type') {

          massNewPin = massNewPin.filter(function (pin) {
            return pin.offer.type === allFilters[i].options[allFilters[i].selectedIndex].value;
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
            return pin.offer.rooms === parseInt(allFilters[i].value, 10);
          });
        }

        if (allFilters[i].name === 'housing-guests') {
          massNewPin = massNewPin.filter(function (pin) {
            return pin.offer.guests === parseInt(allFilters[i].value, 10);
          });
        }

        if (allFilters[i].name === 'housing-features') {
          for (var j = 0; j < mapCheckbox.length; j++) {
            if (mapCheckbox[j].checked) {
              massNewPin = massNewPin.filter(function (pin) {
                return pin.offer.features[j] === mapCheckbox[j].value;
              });
            }
          }
        }
      }
    }
    return massNewPin;
  };
})();
