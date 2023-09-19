class Shop {
  render(): string {
    // Render the shop by calling the render method of ProductList and ShoppingCart classes
    const productList = new ProductList();
    const shoppingCart = new ShoppingCart();
    return `${productList.render()} ${shoppingCart.render()}`;
  }
}
