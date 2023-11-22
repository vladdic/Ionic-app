<template>
  <div class="card-list">
    <CardListItem
      v-if="products && products.length > 0"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import CardListItem from "./CardListItem.vue";
import { useStore } from "./index";
import { ref, onMounted } from "vue";

const store = useStore();
const products = ref([]);

onMounted(async () => {
  try {
    console.log("Before fetching products. Current products:", products.value);
    products.value = (await store.fetchProducts()) || [];
    console.log("After fetching products. Fetched products:", [
      ...products.value,
    ]);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
  overflow-y: auto; 
  max-height: 80vh; 
}
</style>
