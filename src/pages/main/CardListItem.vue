<template>
  <div class="card">
    <img
      v-for="(image, index) in product.images"
      :src="image"
      :alt="`Image ${index + 1}`"
      :key="index"
    />
    <h2>{{ product.title }}</h2>
    <p>Price: {{ product.price }}</p>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 16px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}

.card h2 {
  font-size: 18px;
  margin-bottom: 8px;
}

.card p {
  font-size: 14px;
  color: #888;
}
</style>
