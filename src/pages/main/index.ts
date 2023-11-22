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
        console.log('Before API call. Current products:', this.products);
        const response = await getProducts();
        console.log('API Response in store:', response);
        
        if (response) {
          this.products = response;
          console.log('After API call. Updated products:', this.products);
          return this.products;
        } else {
          console.error('Invalid API response in store:', response);
          return null;
        }
      } catch (error) {
        console.error('Error fetching products in store:', error);
        return null;
      }
    },
  },
});
