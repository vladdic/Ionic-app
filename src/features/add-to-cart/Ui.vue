<template>
  <ion-button fill="clear" color="dark" size="small" @click="handleButtonClick">
    <ion-icon :icon="buttonIcon"></ion-icon>
  </ion-button>
</template>

<script setup lang="ts">
import { useCartStore } from "./store";
import { IonButton, IonIcon } from "@ionic/vue";
import { cartOutline, trashOutline } from "ionicons/icons";
import { useRoute } from "vue-router";
import { computed } from "vue";

const { product } = defineProps(["product"]);
const cartStore = useCartStore();
const route = useRoute();

const handleButtonClick = () => {
  if (route.path === "/cart") {
    cartStore.removeFromCart(product);
  } else {
    const nonReactiveProduct = JSON.parse(JSON.stringify(product));
    cartStore.addToCart(nonReactiveProduct);
  }
};

const buttonIcon = computed(() => {
  return route.path === "/cart" ? trashOutline : cartOutline;
});
</script>
