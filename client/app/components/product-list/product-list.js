import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductListComponent from './product-list.component';

const ProductListModule = angular.module('product-list', [
  uiRouter
])

.component('productList', ProductListComponent);

export default ProductListModule;
