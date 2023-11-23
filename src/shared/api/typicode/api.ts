import apiClient from "./apiClient";
import { ProductsApiResponse } from "./apiTypes";

export async function getProductsByCategoryId(categoryId: number): Promise<ProductsApiResponse> {
  try {
    const response = await apiClient.get<ProductsApiResponse>(`products?categoryId=${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error in api.ts:', error);
    throw error;
  }
}
