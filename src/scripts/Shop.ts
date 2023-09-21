import { ShoppingCart } from './ShoppingCart.js';
import { ProductList } from './ProductList.js';

export class Shop {
  private productList: ProductList;
  private shoppingCart: ShoppingCart;
  constructor(productList: ProductList, shoppingCart: ShoppingCart) {
    this.productList = productList;
    this.shoppingCart = shoppingCart;
  }

  async init(): Promise<void> {
    await this.productList.fetchProducts();
  }

  createElements(): ShopAppElements {
    const shoppingCartEle = this.shoppingCart.createElement();
    const productListEle = this.productList.createElement();
    return { shoppingCartEle, productListEle };
  }
}

type ShopAppElements = {
  shoppingCartEle: HTMLElement;
  productListEle: HTMLElement;
};
