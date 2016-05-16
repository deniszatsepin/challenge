import angular from 'angular';
import ngMockE2E from 'angular-mocks/ngMockE2E';
import productsResponse from './products-response';

const mockHttp = ($httpBackend) => {
  "ngInject";
  // returns the current list of products
  $httpBackend.whenGET('/products').respond(productsResponse);
};

export default angular
  .module('httpMocking', [
    ngMockE2E
  ])
  .run(mockHttp);
