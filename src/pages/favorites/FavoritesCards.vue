<template>
  <div class="cart">
    <TheHeader></TheHeader>
    <h1 class="cart__title">Cart</h1>
    <div v-if="favoriteItems.length === 0" class="cart__message">
      <p>Your cart is empty.</p>
    </div>
    <div class="cards__container">
      <div class="card__list">
        <div v-for="(character, index) in favoriteItems" :key="index">
          <div v-if="character && character.image" color="light" class="card">
            <img :src="character.image" :alt="`Image of ${character.name}`" />
            <div class="card__info">
              <p>{{ character.name }}</p>
              <Ui
                :image="character.image"
                :name="character.name"
                :status="character.status"
                :species="character.species"
                :location="character.location"
                :origin="character.origin"
                :created="character.created"
                :gender="character.gender"
                :id="character.id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/pages/header/TheHeader.vue";
import Ui from "@/features/add-to-cart/Ui.vue";
import { useFavoritesStore } from "@/features/add-to-cart/store";
import { ref, onMounted, watch } from "vue";

interface Character {
  image: string;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  origin: { name: string };
  created: string;
  gender: string;
  id: number;
}

const favoritesStore = useFavoritesStore();
const favoriteItems = ref<Character[]>([]);

const updateFavoriteItems = () => {
  favoriteItems.value = [...favoritesStore.getFavoriteItems()];
};

onMounted(() => {
  updateFavoriteItems();
  watch(favoritesStore, updateFavoriteItems);
});
</script>

<style scoped>
@import "./styles.module.scss";
</style>
