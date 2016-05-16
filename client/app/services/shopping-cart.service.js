
export default class ShoppingCart {
  /*@ngInject*/
  constructor($q, $rootScope) {
    this._$q = $q;
    this.items = [];
    this.totalPrice = 0;

    const that = this;
    $rootScope.$watch(() => this.items, (nV, oV) => {
      if (nV !== oV) {
        that.items.forEach((el) => {
          el.__calculatePrice();
        });
        that.__calculatePrice();
      }
    }, true);
  }

  addToCart(product) {
    console.log(product);
    
    const item = this.items.find((item) => {
      return item.product.id === product.id;
    });
    console.log(this.items);
    if (item) {
      item.addProduct();
    } else {
      this.items.push(new CartItem(product, 1));
    }
  }

  removeFromCart(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.__calculatePrice();
  }
  
  __calculatePrice() {
    this.totalPrice = this.items.reduce((sum, item) => {
      return sum + item.totalPrice;
    }, 0);
  }
}

class CartItem {
  constructor(product, amount) {
    this.product = product;
    this.amount =  this.__setAmount(amount);
    this.totalPrice = 0;
    this.MAX = 3;
    
    this.__calculatePrice();
  }
  
  __setAmount(amount) {
    if (amount >= 0) {
      return amount;
    }
    return this.product ? 1 : 0;
  }
  
  __calculatePrice() {
    if (this.product && this.product.price && this.amount >= 0) {
      this.totalPrice = this.product.price * this.amount;
    }
  }

  addProduct() {
    if (this.amount < this.MAX) {
      this.amount += 1;
      this.__calculatePrice();
    }
  }

  removeProduct() {
    if (this.amount > 1) {
      this.amount -= 1;
      this.__calculatePrice();
    }
  }
  
  setAmount(amount) {
    if (amount > 0) {
      this.amount = amount;
    }
  }
}
