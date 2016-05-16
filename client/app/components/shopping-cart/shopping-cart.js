import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ShoppingCartComponent from './shopping-cart.component';

export default angular
  .module('shopping-cart', [
    uiRouter
  ])
  .component('shoppingCart', ShoppingCartComponent);
