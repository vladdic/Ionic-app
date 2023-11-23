import { defineStore } from 'pinia';
import { getProductsByCategoryId } from '@/shared/api/typicode/api'; 
import { ProductsApiResponse } from '@/shared/api/typicode/apiTypes';

interface State {
  products: ProductsApiResponse | null;
}

export const useStore = defineStore('store', {
  state: (): State => ({
    products: null,
  }),

  actions: {
    async fetchProductsByCategoryId(categoryId: number): Promise<ProductsApiResponse | null> {
      try {
        const response = await getProductsByCategoryId(categoryId);
        if (response) {
          this.products = response;
          return this.products;
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error in store.ts:', error);
        return null;
      }
    },
  },
});
