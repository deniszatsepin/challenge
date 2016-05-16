import template from './product-card.html';
import controller from './product-card.controller';
import './product-card.less';

const ProductCardComponent = {
  restrict: 'E',
  bindings: {
    product: '='
  },
  replace: true,
  template,
  controller,
  controllerAs: 'vm'
};

export default ProductCardComponent;
