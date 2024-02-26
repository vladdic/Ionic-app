import { fetchCharacters } from "@/shared/api/typicode/api";
import { Character } from "@/shared/api/typicode/apiTypes";
import { defineStore } from "pinia";
import { ref, Ref } from "vue";

interface CardStoreState {
  charactersList: Character[];
  totalPages: Ref<number>;
  error: Ref<string | null>;
  searchQuery: Ref<string>;
  currentPage: Ref<number>;
  selectedStatus: Ref<string>;
  selectedSpecies: Ref<string>;
  characterIdToDelete: Ref<number | null>;
  noResults: Ref<boolean>;
}

export const useCardStore = defineStore("CardStore", {
  state: (): CardStoreState => ({
    charactersList: [],
    totalPages: ref<number>(0),
    error: ref<string | null>(null),
    searchQuery: ref<string>(""),
    currentPage: ref<number>(1),
    selectedStatus: ref<string>(""),
    selectedSpecies: ref<string>(""),
    characterIdToDelete: ref<number | null>(null),
    noResults: ref<boolean>(false),
  }),

  actions: {
    async fetchData(currentPage: number): Promise<void> {
      try {
        const data = await fetchCharacters(currentPage);
        this.charactersList = data.results;
        this.totalPages = data.info.pages;
      } catch (error: any) {
        this.error = error.message;
      }
    },

    updateCurrentPage(page: number): void {
      this.currentPage = page;
    },

    setCharacterIdToDelete(characterId: number): void {
      this.characterIdToDelete = characterId;
    },

    updateSearchQuery(query: string): void {
      this.searchQuery = query;
    },
  },
});
