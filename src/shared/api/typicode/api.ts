import apiClient from "./apiClient";
import { ProductsApiResponse } from "./apiTypes";

export async function getProducts(): Promise<ProductsApiResponse> {
  try {
    const response = await apiClient.get<ProductsApiResponse>("products");
    console.log('API Response in api.ts:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in api.ts:', error);
    throw error;
  }
}