import angular from 'angular';
import priceFilter from './price.filter';

export default angular
  .module('filters', [])
  .filter('price', priceFilter);
