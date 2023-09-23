import { ShopController } from './controller/Shop.controller.js';
import { ShoppingCartController } from './controller/section/ShoppingCart.controller.js';
import { BrowseController } from './controller/section/Browse.controller.js';

class App {
  protected shop: ShopController;
  constructor(shop: ShopController) {
    this.shop = shop;
  }

  async init() {
    const appContainer = document.getElementById('app');
    if (appContainer) {
      await shop.init();
      const { shoppingCartEle, browseEle } = this.shop.createElements();
      appContainer.appendChild(shoppingCartEle);
      appContainer.appendChild(browseEle);
    } else {
      throw new Error('app element is not defined.');
    }
  }
}
const shoppingCart = new ShoppingCartController();
const browse = new BrowseController(shoppingCart);
const shop = new ShopController(browse, shoppingCart);

const app = new App(shop);

app.init();
