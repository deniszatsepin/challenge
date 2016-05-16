import template from './shopping-cart.html';
import controller from './shopping-cart.controller';
import './shopping-cart.less';

const ShoppingCartComponent = {
  restrict: 'E',
  bindings: {},
  replace: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default ShoppingCartComponent;
