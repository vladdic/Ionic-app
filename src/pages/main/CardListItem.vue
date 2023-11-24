<template>
  <ion-card :class="styles.card" color="light">
    <img
      v-for="image in product.images"
      :src="image"
      alt="Images of each element"
    />
    <p>Price: {{ product.price }}</p>
  </ion-card>
</template>

<script setup>
import styles from "./styles.module.scss";
import { IonCard } from "@ionic/vue";
const { product } = defineProps(["product"]);
</script>
