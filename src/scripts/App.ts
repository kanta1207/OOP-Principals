class App {
  static shoppingCart: ShoppingCart = new ShoppingCart();

  static init() {
    const shop = new Shop();
    const appContainer = document.getElementById('app');
    if (appContainer) {
      appContainer.innerHTML = shop.render();
    }
  }

  static addProductToCart(productItem: ProductItem) {
    this.shoppingCart.items.push(productItem.product);
    this.shoppingCart.render();
  }
}

App.init();
