import { Product } from './Product.js';
import { ProductItem } from './ProductItem.js';
import { ShoppingCart } from './ShoppingCart.js';

export class ProductList {
  products: Product[] = [];
  shoppingCart: ShoppingCart;

  constructor(shoppingCart: ShoppingCart) {
    this.shoppingCart = shoppingCart;
  }
  async fetchProducts(): Promise<void> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    this.products = data;
  }

  createElement(): HTMLElement {
    const container = document.createElement('section');
    container.id = 'section-product-list';

    const ulEle = document.createElement('ul');

    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      const productItemEle = ProductItem.createElement(
        product,
        this.shoppingCart
      );
      ulEle.appendChild(productItemEle);
    }

    return ulEle;
  }
}
