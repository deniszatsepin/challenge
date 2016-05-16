import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= upCaseName %>Component from './<%= name %>.component';

const <%= upCaseName %>Module = angular.module('<%= name %>', [
  uiRouter
])

.component('<%= name %>', <%= upCaseName %>Component);

export default <%= upCaseName %>Module;
