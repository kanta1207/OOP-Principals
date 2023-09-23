import { ShoppingCartController } from '../controller/section/ShoppingCart.controller.js';
import { Product } from '../model/Product.js';
export class ProductView {
  private static createElement(
    product: Product,
    option: Partial<CreateEleOption>
  ) {
    const liEle = document.createElement('li');
    const container = document.createElement('div');
    const {
      isTitleOmitted,
      isButtonOmitted,
      isPriceOmitted,
      isDescriptionOmitted,
      isImageOmitted,
    } = option;
    liEle.className = 'product-item';
    if (!isImageOmitted && !isTitleOmitted) {
      const imageEle = document.createElement('img');
      imageEle.src = product.image;
      imageEle.alt = product.title;
      container.appendChild(imageEle);
    }

    const contentEle = document.createElement('div');
    contentEle.className = 'product-item__content';
    if (!isTitleOmitted) {
      const titleEle = document.createElement('h2');
      titleEle.innerHTML = product.title;
      contentEle.appendChild(titleEle);
    }

    if (!isPriceOmitted) {
      const priceEle = document.createElement('h3');
      priceEle.innerHTML = product.price.toString();
      contentEle.appendChild(priceEle);
    }

    if (!isDescriptionOmitted) {
      const descriptionEle = document.createElement('h4');
      descriptionEle.innerHTML = product.description;
      contentEle.appendChild(descriptionEle);
    }

    if (!isButtonOmitted) {
      const buttonEle = document.createElement('button');
      contentEle.appendChild(buttonEle);
    }

    container.appendChild(contentEle);
    liEle.appendChild(container);
    return liEle;
  }

  private static createToggleButton(
    sectionTitle: string,
    productListEle: HTMLElement
  ) {
    const container = document.createElement('div');
    container.className = 'toggleButton-container';
    const toggleButtonEle = document.createElement('button');
    toggleButtonEle.className = 'toggleButton';
    toggleButtonEle.innerHTML = `▲`;

    const sectionTitleEle = document.createElement('h2');
    sectionTitleEle.innerHTML = sectionTitle;

    toggleButtonEle.addEventListener('click', () => {
      if (
        productListEle.style.display === 'none' ||
        productListEle.style.display === ''
      ) {
        productListEle.style.display = 'grid';
        toggleButtonEle.innerHTML = `▲`;
      } else {
        productListEle.style.display = 'none';
        toggleButtonEle.innerHTML = `▼`;
      }
    });
    container.appendChild(toggleButtonEle);
    container.appendChild(sectionTitleEle);
    return container;
  }

  static createProductListEle(
    products: Product[],
    sectionTitle: string,
    createEleOption: Partial<CreateEleOption> = {}
  ) {
    const container = document.createElement('div');
    const ulEle = document.createElement('ul');

    ulEle.className = 'product-list';

    const toggleButtonEle = this.createToggleButton(sectionTitle, ulEle);

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productItemEle = this.createElement(product, createEleOption);
      ulEle.appendChild(productItemEle);
    }
    container.appendChild(toggleButtonEle);
    container.appendChild(ulEle);
    return container;
  }

  static createOrderableProductListEle(
    products: Product[],
    sectionTitle: string,
    addToCartFunc: (
      product: Product,
      shoppingCartController: ShoppingCartController
    ) => void,
    shoppingCartController: ShoppingCartController,
    createEleOption: Partial<CreateEleOption> = {}
  ): HTMLElement {
    const container = document.createElement('div');
    const ulEle = document.createElement('ul');
    ulEle.className = 'product-list';
    const toggleButtonEle = this.createToggleButton(sectionTitle, ulEle);
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productItemEle = this.createElement(product, createEleOption);
      // add order function to product item
      const buttonEle = productItemEle.querySelector('button');
      if (buttonEle) {
        buttonEle.innerHTML = 'Add to Cart';
        buttonEle.addEventListener('click', () => {
          addToCartFunc(product, shoppingCartController);
        });
      }
      // append productItem Ele to ul ele
      ulEle.appendChild(productItemEle);
    }
    container.appendChild(toggleButtonEle);
    container.appendChild(ulEle);
    return container;
  }
}

type CreateEleOption = {
  isTitleOmitted: boolean;
  isButtonOmitted: boolean;
  isPriceOmitted: boolean;
  isDescriptionOmitted: boolean;
  isImageOmitted: boolean;
};
