import template from './product-list.html';
import controller from './product-list.controller';
import './product-list.less';

const ProductListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default ProductListComponent;
