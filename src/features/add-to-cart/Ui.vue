<template>
  <ion-button fill="clear" color="dark" size="small" @click="addToCart">
    <ion-icon :icon="cartOutline"></ion-icon>
  </ion-button>
</template>

<script setup lang="ts">
import { useCartStore } from "./store";
import { IonButton, IonIcon } from "@ionic/vue";
import { cartOutline } from "ionicons/icons";

const { product } = defineProps(["product"]);
const cartStore = useCartStore();

const addToCart = () => {
  const nonReactiveProduct = JSON.parse(JSON.stringify(product));
  cartStore.addToCart(nonReactiveProduct);
};
</script>
