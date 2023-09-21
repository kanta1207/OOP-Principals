import { Product } from './Product.js';

export class ShoppingCart {
  items: Product[] = [];

  getTotal(): number {
    return this.items.reduce((total, product) => total + product.price, 0);
  }

  createElement(): HTMLElement {
    const container = document.createElement('section');
    container.id = 'section-cart';
    container.className = 'cart';
    container.innerHTML = ` <h2>Total: $${this.getTotal()}</h2> <button>Order Now!</button>`;
    return container;
  }
}
