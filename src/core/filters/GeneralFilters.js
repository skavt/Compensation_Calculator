import Vue from 'vue';

Vue.filter('round', function (value, decimalPlaces = 2) {
  return parseFloat(value).toFixed(decimalPlaces);
});