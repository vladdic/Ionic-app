<template>
  <ion-button fill="clear" color="dark" size="small" @click="handleButtonClick">
    <ion-icon :icon="buttonIcon"></ion-icon>
  </ion-button>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "./store";
import { IonButton, IonIcon } from "@ionic/vue";
import { cartOutline, trashOutline } from "ionicons/icons";
import { useRoute } from "vue-router";
import { computed } from "vue";

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

const buttonIcon = computed(() => {
  return route.path === "/cart" ? trashOutline : cartOutline;
});
</script>
