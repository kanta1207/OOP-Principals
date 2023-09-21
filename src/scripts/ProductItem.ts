import { Product } from './Product.js';

export class ProductItem {
  static addToCart(product: Product) {
    // just console.log the product for now
    console.log(product);
  }

  static createElement(product: Product): HTMLElement {
    const liEle = document.createElement('li');
    liEle.className = 'product-item';
    liEle.innerHTML = `<div>
  <img
    src="${product.image}"
    alt="${product.title}"
  />
  <div class="product-item__content">
    <h2>${product.title}</h2>
    <h3>$${product.price}</h3>
    <p>${product.description}</p>
    <button onClick="${ProductItem.addToCart(product)}">Add to Cart</button>
  </div>
</div>`;
    return liEle;
  }
}
