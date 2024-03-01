import { defineStore } from 'pinia';

function getSavedCartItems() {
  const savedCartItems = localStorage.getItem('cartItems');
  if (savedCartItems) {
    return JSON.parse(savedCartItems);
  } else {
    return [];
  }
}

export const useCartStore = defineStore('cart', {

  state: () => ({
    // 購物車開關
    isCartOpen: false,

    // 商品新增處
    cartItems: getSavedCartItems(),
  }),

  actions: {
    // 購物車開關
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },

    // 購物車商品增減
    addToCart(product) {
      const existingProduct = this.cartItems.find(item => item.productId === product.productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const productWithQuantity = { ...product, quantity: 1 };
        this.cartItems.push(productWithQuantity);
      }

      this.updateLocalStorage(this.cartItems);
    },

    // mItem頁用的加入購物車
    addToCartMitem(product, productQuantity) {
      const existingProduct = this.cartItems.find(item => item.productId === product.productId);
      if (existingProduct) {
        existingProduct.quantity += productQuantity;
      } else {
        const productWithQuantity = { ...product, quantity: productQuantity };
        this.cartItems.push(productWithQuantity);
      }

      this.updateLocalStorage(this.cartItems);
    },

    removeFromCart(index){
      this.cartItems.splice(index, 1)

      this.updateLocalStorage(this.cartItems);
    },

    // localStorage
    updateLocalStorage(cartItems) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },
  }
});



