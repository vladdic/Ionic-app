<!-- CardListItem.vue -->
<template>
  <ion-card :class="styles.card" color="light">
    <img
      v-for="image in product.images"
      :src="image"
      :key="image"
      alt="Images of each element"
    />
    <div :class="styles.card__price">
      <p>Price: {{ product.price }}</p>
      <ion-button fill="clear" color="dark" size="small" @click="addToCart">
        <ion-icon :icon="cartOutline"></ion-icon>
      </ion-button>
    </div>
  </ion-card>
</template>

<script setup>
import styles from "./styles.module.scss";
import { useCartStore } from "@/pages/favorites/index";
import { IonCard, IonButton, IonIcon } from "@ionic/vue";
import { cartOutline } from "ionicons/icons";

const { product } = defineProps(["product"]);
const cartStore = useCartStore();

const addToCart = () => {
  const nonReactiveProduct = JSON.parse(JSON.stringify(product));
  console.log("Adding to cart:", nonReactiveProduct);
  cartStore.addToCart(nonReactiveProduct);
};
</script>
