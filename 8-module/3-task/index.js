export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let cartItem;
    if(this.cartItems.length == 0) {
      cartItem = {
        product: product,
        count: 1
      };
      this.cartItems.push(cartItem);
    }


    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    // ваш код
  }

  isEmpty() {
    // ваш код
  }

  getTotalCount() {
    // ваш код
  }

  getTotalPrice() {
    // ваш код
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

