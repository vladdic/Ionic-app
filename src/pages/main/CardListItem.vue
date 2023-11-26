<template>
  <ion-card :class="styles.card" color="light">
    <img
      v-for="image in product.images"
      :src="image"
      alt="Images of each element"
    />
    <div :class="styles.card__price">
      <p>Price: {{ product.price }}</p>
      <ion-button fill="clear" color="dark" size="small">
        <ion-icon :icon="basket"></ion-icon>
      </ion-button>
    </div>
  </ion-card>
</template>

<script setup>
import styles from "./styles.module.scss";
import { IonCard, IonButton, IonIcon } from "@ionic/vue";
import { basket } from "ionicons/icons";
const { product } = defineProps(["product"]);
</script>
