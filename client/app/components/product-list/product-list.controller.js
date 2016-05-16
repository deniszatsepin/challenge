class ProductListController {
  /*@ngInject*/
  constructor(productList) {
    this.name = 'products-list';
    const that = this;
    productList.get().$promise.then((products) => {
      console.log(products.data);
      if (products && products.data) {
        that.products = products.data;
        that.activeTab = that.products[0].id;
      }
    });
  }
}

export default ProductListController;
