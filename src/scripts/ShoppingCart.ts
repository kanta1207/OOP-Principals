class ShoppingCart {
  items: Product[] = [];

  getTotal(): number {
    // Calculate the total price of the items in the cart
    return this.items.reduce((total, product) => total + product.price, 0);
  }

  render(): string {
    // Render the total and a "Order Now" button in a <section> element
    return `<section>Total: $${this.getTotal()} <button>Order Now</button></section>`;
  }
}
