class ProductCardController {
  /*@ngInject*/
  constructor(shoppingCart) {
    this.name = 'product-card';
    this.__shoppingCart = shoppingCart;
  }
  
  addToCart() {
    this.__shoppingCart.addToCart(this.product);
  }
}

export default ProductCardController;
