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
      <Ui :product="product" />
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import Ui from "@/features/add-to-cart/Ui.vue";
import { IonCard } from "@ionic/vue";

const { product } = defineProps(["product"]);
</script>
