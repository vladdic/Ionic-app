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
    products.value = (await store.fetchProducts()) || [];
  } catch (error) {}
});
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
  max-height: 100vh;
}
</style>
