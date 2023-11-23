import apiClient from "./apiClient";
import { ProductsApiResponse } from "./apiTypes";

export async function getProducts(): Promise<ProductsApiResponse> {
  try {
    const response = await apiClient.get<ProductsApiResponse>("products");
    return response.data;
  } catch (error) {
    console.error('Error in api.ts:', error);
    throw error;
  }
}