import { Product } from './Product.js';

export class ShoppingCart {
  items: Product[] = [];

  getTotal(): number {
    return this.items.reduce((total, product) => total + product.price, 0);
  }

  addToCart(product: Product): void {
    this.items.push(product);
    const targetEle = document.getElementsByClassName('cart')[0];
    targetEle.innerHTML = ` <h2>Total: $${this.getTotal()}</h2> <button>Order Now!</button>`;
  }

  createElement(): HTMLElement {
    const container = document.createElement('section');
    container.id = 'section-cart';
    container.className = 'cart';
    container.innerHTML = ` <h2>Total: $${this.getTotal()}</h2> <button>Order Now!</button>`;
    return container;
  }
}
