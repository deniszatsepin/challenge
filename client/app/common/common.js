import angular from 'angular';
import Filters from './filters/filters';
import ProductsPage from './product-page/products-page';

let commonModule = angular.module('app.common', [
  Filters.name,
  ProductsPage.name
]);

export default commonModule;
