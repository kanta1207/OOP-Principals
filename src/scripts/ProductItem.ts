class ProductItem {
  product: Product;

  constructor(product: Product) {
    this.product = product;
  }

  addToCart() {
    // just console.log the product for now
    console.log(this.product);
  }

  render(): string {
    // return the product element with the product data (<li>)
    return `<li>${this.product.title} - $${this.product.price} <button onClick="this.addToCart()">Add to Cart</button></li>`;
  }
}
