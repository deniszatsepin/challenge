/**
 * Created by denis.zatsepin on 15/05/16.
 */
import controller from './products-page.controller';
import template from './products-page.html';
import './products-page.less';

const productsPageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default productsPageComponent;
