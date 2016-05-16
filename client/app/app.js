import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HttpMocking from './http-mocking/http-mocking';
import Services from './services/services';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    HttpMocking.name,
    Services.name,
    Common.name,
    Components.name
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    // $urlRouterProvider.when('', 'products_page');
  })

  .component('app', AppComponent);
