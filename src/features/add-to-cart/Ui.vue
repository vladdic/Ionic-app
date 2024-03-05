<template>
  <button @click="handleButtonClick"></button>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "./store";
import { useRoute } from "vue-router";

const props = defineProps<{
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
}>();

const cartStore = useFavoritesStore();
const route = useRoute();

const handleButtonClick = () => {
  if (route.path === "/cart") {
    cartStore.removeFromFavorites(props);
  } else {
    cartStore.addToFavorites(props);
  }
};
</script>
