import apiClient from "./apiClient";
import { ApiResponse } from "./apiTypes";

export async function fetchCharacters(page: number): Promise<ApiResponse> {
  try {
    const response = await apiClient.get("character", {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
