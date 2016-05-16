import _ from 'lodash';

class ShoppingCartController {
  /*@ngInject*/
  constructor(shoppingCart) {
    this.name = 'shopping-cart';
    this.__shoppingCart = shoppingCart;
    this.items = shoppingCart.items;
    this.maxAmount = 3;
    this.range = _.range(1, this.maxAmount + 1);
  }
  
  removeItem(item) {
    this.__shoppingCart.removeFromCart(item);
  }
  
  addOne(item) {
    item.addProduct();
  }
  
  removeOne(item) {
    item.removeProduct();
  }
  
  getTotal() {
    return this.__shoppingCart.totalPrice;
  }
  
  getOnce() {
    return _.reduce(this.items, (sum, item) => {
      if (!item.product.priceType) {
        return sum + item.totalPrice;
      }
      return sum;
    }, 0)
  }
  
  getMonthly() {
    return _.reduce(this.items, (sum, item) => {
      if (item.product.priceType) {
        return sum + item.totalPrice;
      }
      return sum;
    }, 0)
  }
}

export default ShoppingCartController;
