<template>
  <div :class="styles.card__list">
    <CardListItem
      v-for="product in products.slice(0, 6)"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import CardListItem from "./CardListItem.vue";
import { useStore } from "./index";
import styles from "./styles.module.scss";
import { ref, onMounted } from "vue";

const store = useStore();
const products = ref([]);

onMounted(async () => {
  try {
    products.value = await store.fetchProductsByCategoryId(3);
  } catch (error) {
    console.error("Error in CardList.vue:", error);
  }
});
</script>
