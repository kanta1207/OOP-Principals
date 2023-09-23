import { ShoppingCartController } from './section/ShoppingCart.controller.js';
import { BrowseController } from './section/Browse.controller.js';

export class ShopController {
  private browseController: BrowseController;
  private shoppingCartController: ShoppingCartController;
  constructor(
    browseController: BrowseController,
    shoppingCartController: ShoppingCartController
  ) {
    this.browseController = browseController;
    this.shoppingCartController = shoppingCartController;
  }

  async init(): Promise<void> {
    await this.browseController.fetchProducts();
  }

  createElements(): ShopAppElements {
    const shoppingCartEle = this.shoppingCartController.createElement();
    const browseEle = this.browseController.createElement();
    return { shoppingCartEle, browseEle };
  }
}

type ShopAppElements = {
  shoppingCartEle: HTMLElement;
  browseEle: HTMLElement;
};
