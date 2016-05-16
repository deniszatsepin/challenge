import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsPageComponent from './products-page.component';

const ProductsPageModule = angular
  .module('products-page', [
    uiRouter
  ])
  .config(($stateProvider) => {
    "ngInject";
    
    $stateProvider
      .state('products_page', {
        url: '/',
        template: '<products-page></products-page>'
      });
  })
  .component('productsPage', productsPageComponent);


export default ProductsPageModule;
