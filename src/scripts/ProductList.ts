import { Product } from './Product.js';
import { ProductItem } from './ProductItem.js';

export class ProductList {
  products: Product[] = [];

  async fetchProducts(): Promise<void> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);

    this.products = data;
  }

  createElement(): HTMLElement {
    const container = document.createElement('section');
    container.id = 'section-product-list';
    console.log(this.products);

    const ulEle = document.createElement('ul');

    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      const productItemEle = ProductItem.createElement(product);
      ulEle.appendChild(productItemEle);
    }

    return ulEle;
  }
}
