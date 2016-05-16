export default /*@ngInject*/ function($resource) {
  return $resource('/products', {}, {
    get: {
      method: 'GET'
    }
  });
}
