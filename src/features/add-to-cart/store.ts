import { Character } from "@/shared/api/typicode/apiTypes";
import { defineStore } from "pinia";

interface FavoritesState {
  favoriteItems: Character[];
}

export const useFavoritesStore = defineStore("favorites", {
  state: (): FavoritesState => ({
    favoriteItems: [],
  }),

  actions: {
    addToFavorites(character: Character): void {
      this.favoriteItems.push(character);
    },

    removeFromFavorites(character: Character): void {
      const index = this.favoriteItems.findIndex(
        (favCharacter) => favCharacter.id === character.id
      );
      if (index !== -1) {
        this.favoriteItems.splice(index, 1);
      }
    },

    getFavoriteItems(): Character[] {
      return this.favoriteItems;
    },
  },
});
