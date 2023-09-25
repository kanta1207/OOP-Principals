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
    const shoppingCartSection = this.shoppingCartController.createSection();
    const browseSection = this.browseController.createSection();
    return { shoppingCartSection, browseSection };
  }
}

type ShopAppElements = {
  shoppingCartSection: HTMLElement;
  browseSection: HTMLElement;
};
