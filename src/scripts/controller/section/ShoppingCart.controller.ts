import { Product } from '../../model/Product.js';
import { SectionController } from '../../abstracts/Section.controller.js';
import { UtilView } from '../../view/Util.view.js';
import { ProductView } from '../../view/Product.view.js';

export class ShoppingCartController extends SectionController {
  products: Product[] = [];

  getTotal(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  addToCart(product: Product): void {
    this.products.push(product);
    const total = this.getTotal();

    const cartSection = document.getElementById('section-cart');

    if (cartSection) {
      cartSection.innerHTML = '';

      const totalEle = UtilView.createTotalDisplay(
        total,
        this.products,
        this.orderAll
      );
      const cartProductListEle = ProductView.createProductListEle(
        this.products,
        'Cart',
        { isButtonOmitted: true, isDescriptionOmitted: true }
      );

      cartSection.appendChild(totalEle);
      cartSection.appendChild(cartProductListEle);
    } else throw Error("section-cart wasn't found");
  }

  orderAll(products: Product[]) {
    if (products.length > 0) {
      alert(`Order ${products.map((product) => product.title + ',')}`);
    } else alert('Cart is empty');
  }

  createSection(): HTMLElement {
    const container = document.createElement('section');
    container.id = 'section-cart';
    const total = this.getTotal();

    const totalEle = UtilView.createTotalDisplay(
      total,
      this.products,
      this.orderAll
    );

    const cartProductListEle = ProductView.createProductListEle(
      this.products,
      'Cart',
      { isButtonOmitted: true, isDescriptionOmitted: true }
    );
    container.appendChild(totalEle);
    container.appendChild(cartProductListEle);
    return container;
  }
}
