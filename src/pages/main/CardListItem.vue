<template>
  <div :class="styles.card">
    <img
      v-for="image in product.images"
      :src="image"
      alt="Images of each elements"
    />
    <p>Price: {{ product.price }}</p>
  </div>
</template>

<script setup>
import styles from "./styles.module.scss";
const { product } = defineProps(["product"]);
</script>
