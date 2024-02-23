import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {

  state: () => ({
    // 購物車開關
    isCartOpen: false,

    // 商品新增處
    cartItems: [],
  }),

  actions: {
    // 購物車開關
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },

    // 購物車商品增減
    // addTocart(item) {
    //   this.cartItems.push(item);
    // },
    addToCart(product) {
      const existingProduct = this.cartItems.find(item => item.productId === product.productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(index){
      this.cartItems.splice(index, 1)
    },
  }
});



