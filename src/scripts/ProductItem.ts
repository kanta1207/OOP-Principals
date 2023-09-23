import { Product } from './Product.js';
import { ShoppingCart } from './ShoppingCart.js';
export class ProductItem {
  static addToCart(product: Product, shoppingCart: ShoppingCart) {
    shoppingCart.addToCart(product);
  }

  static createElement(
    product: Product,
    shoppingCart: ShoppingCart
  ): HTMLElement {
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
    <button>Add to Cart</button>
  </div>
</div>`;

    const button = liEle.querySelector('button');
    if (button) {
      button.addEventListener('click', () => {
        ProductItem.addToCart(product, shoppingCart);
      });
    }
    return liEle;
  }
}
