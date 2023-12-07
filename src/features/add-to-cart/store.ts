import { Product } from '@/shared/api/typicode/apiTypes';
import { defineStore } from 'pinia';

interface CartState {
  cartItems: Product[];
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    cartItems: [],
  }),

  actions: {
    addToCart(product: Product): void {
      this.cartItems.push(product);
    },
    
    removeFromCart(product: Product): void {
      const index = this.cartItems.findIndex((cartProduct) => cartProduct.id === product.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },

    getCartItems(): Product[] {
      return this.cartItems;
    },
  },
});
