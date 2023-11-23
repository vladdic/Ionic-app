// index.ts
import { defineStore } from 'pinia';
import { getProducts } from '@/shared/api/typicode/api';
import { ProductsApiResponse } from '@/shared/api/typicode/apiTypes';

interface State {
  products: ProductsApiResponse | null;
}

export const useStore = defineStore('store', {
  state: (): State => ({
    products: null,
  }),

  actions: {
    async fetchProducts(): Promise<ProductsApiResponse | null> {
      try {
        const response = await getProducts();
        if (response) {
          this.products = response;
          return this.products;
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    },
  },
});
