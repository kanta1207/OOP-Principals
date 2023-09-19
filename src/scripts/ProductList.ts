class ProductList {
  products: Product[] = [];

  async fetchProducts(): Promise<void> {
    // Fetch the products from the API and populate the products array
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    this.products = data;
  }

  render(): string {
    // Render the products by looping through the products array and creating a new ProductItem instance for each product.
    const productItems = this.products
      .map((product) => new ProductItem(product).render())
      .join('');
    return `<ul>${productItems}</ul>`;
  }
}
