import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.less';

const <%= upCaseName %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default <%= upCaseName %>Component;
