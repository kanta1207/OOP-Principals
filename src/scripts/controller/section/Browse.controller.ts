import { Product } from '../../model/Product.js';
import { ProductView } from '../../view/Product.view.js';
import { ShoppingCartController } from './ShoppingCart.controller.js';
import { SectionController } from '../../abstracts/Section.controller.js';

export class BrowseController extends SectionController {
  protected products: Product[] = [];
  shoppingCartController: ShoppingCartController;

  constructor(shoppingCartController: ShoppingCartController) {
    super();
    this.shoppingCartController = shoppingCartController;
  }
  async fetchProducts(): Promise<void> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    this.products = data;
  }

  addToCart(product: Product, shoppingCartController: ShoppingCartController) {
    shoppingCartController.addToCart(product);
  }

  createSection(): HTMLElement {
    const container = document.createElement('section');
    container.id = 'section-browse';

    const listEle = ProductView.createOrderableProductListEle(
      this.products,
      'Browse',
      this.addToCart,
      this.shoppingCartController
    );
    container.appendChild(listEle);

    return container;
  }
}
