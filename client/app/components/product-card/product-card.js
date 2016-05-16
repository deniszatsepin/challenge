import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductCardComponent from './product-card.component';

const ProductCardModule = angular.module('app.components.product-card', [
  uiRouter
])

  .component('productCard', ProductCardComponent);

export default ProductCardModule;
