import angular from 'angular';
import ngResource from 'angular-resource';

import productList from './product-list.service';
import shoppingCart from './shopping-cart.service'

export default angular
  .module('app.services', [
    ngResource
  ])
  .service({
    productList,
    shoppingCart
  });
