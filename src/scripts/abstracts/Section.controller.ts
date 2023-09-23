import { Product } from '../model/Product.js';

export abstract class SectionController {
  protected products: Product[] = [];
  abstract createSection(): HTMLElement;
}
