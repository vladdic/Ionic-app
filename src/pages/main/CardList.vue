<template>
  <div :class="styles.card__list">
    <CardListItem
      v-for="product in products.slice(0, 6)"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import CardListItem from "./CardListItem.vue";
import { useStore } from "./index";
import styles from "./styles.module.scss";
import { Product } from "@/shared/api/typicode/apiTypes";
import { ref, onMounted } from "vue";

const store = useStore();
const products = ref<Product[]>([]);

onMounted(async () => {
  try {
    console.log("Trying to fetch products...");
    const response = await store.fetchProductsByCategoryId(3);
    console.log("Response:", response);
    if (response && Array.isArray(response)) {
      console.log("Products data:", response);
      products.value = response;
    } else {
      console.log("No data received");
    }
  } catch (error) {
    console.error("Error in CardList.vue:", error);
  }
});
</script>
