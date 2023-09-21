import { Shop } from './Shop.js';
import { ShoppingCart } from './ShoppingCart.js';
import { ProductList } from './ProductList.js';

class App {
  protected shop: Shop;
  constructor(shop: Shop) {
    this.shop = shop;
  }

  async init() {
    const appContainer = document.getElementById('app');
    if (appContainer) {
      await shop.init();
      const { shoppingCartEle, productListEle } = this.shop.createElements();
      appContainer.appendChild(shoppingCartEle);
      appContainer.appendChild(productListEle);
    } else {
      throw new Error('app element is not defined.');
    }
  }
}
const shoppingCart = new ShoppingCart();
const productList = new ProductList();
const shop = new Shop(productList, shoppingCart);

const app = new App(shop);

app.init();
