class App {
  static shoppingCart: ShoppingCart = new ShoppingCart();

  static init() {
    // Initialize the app by creating an instance of the Shop class and calling the render method of the Shop class
    const shop = new Shop();
    const appContainer = document.getElementById('app');
    if (appContainer) {
      appContainer.innerHTML = shop.render();
    }
  }

  static addProductToCart(productItem: ProductItem) {
    // Add the product to the cart by calling the addToCart method of the Cart class
    this.shoppingCart.items.push(productItem.product);
    this.shoppingCart.render();
  }
}

App.init();
