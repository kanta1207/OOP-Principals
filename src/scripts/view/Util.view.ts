import { Product } from '../model/Product';

export class UtilView {
  static createTotalDisplay(
    total: number,
    products: Product[],
    orderFunc: (products: Product[]) => void
  ) {
    const container = document.createElement('div');
    container.className = 'total';
    container.innerHTML = ` <h2>Total: $${total}</h2> <button onClick={}>Order Now!</button>`;
    const orderBtn = container.querySelector('button');
    if (orderBtn) {
      orderBtn?.addEventListener('click', () => {
        orderFunc(products);
      });
    }

    return container;
  }
}
