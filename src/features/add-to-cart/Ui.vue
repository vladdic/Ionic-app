<template>
  <el-button :icon="btnIcon" @click="handleButtonClick" type="info" plain>
  </el-button>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "./store";
import { ElButton } from "element-plus";
import { Delete, ShoppingCart } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const props = defineProps<{
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
  location: { name: string };
  origin: {
    name: string;
  };
  created: string;
  gender: string;
}>();

const cartStore = useFavoritesStore();
const route = useRoute();

const handleButtonClick = () => {
  if (route.path === "/cart") {
    cartStore.removeFromFavorites(props);
  } else {
    cartStore.addToFavorites(props);
  }
};

const btnIcon = computed(() => {
  return route.path === "/cart" ? Delete : ShoppingCart;
});
</script>
