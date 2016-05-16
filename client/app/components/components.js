import angular from 'angular';
import ProductCard from './product-card/product-card';
import ProductList from './product-list/product-list';
import ShoppingCart from './shopping-cart/shopping-cart';

let componentModule = angular.module('app.components', [
  ProductList.name,
  ProductCard.name,
  ShoppingCart.name
]);

export default componentModule;
