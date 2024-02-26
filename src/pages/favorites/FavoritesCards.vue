<template>
  <ion-page>
    <div :class="styles.cart">
      <TheHeader></TheHeader>
      <h1 :class="styles.cart__title">Cart</h1>
      <div v-if="favoriteItems.length === 0" :class="styles.cart__message">
        <p>Your cart is empty.</p>
      </div>
      <div :class="styles.cards__container">
        <div :class="styles.card__list">
          <div v-for="(character, index) in favoriteItems" :key="index">
            <ion-card
              v-if="character && character.image"
              color="light"
              :class="styles.card"
            >
              <img :src="character.image" :alt="`Image of ${character.name}`" />
              <div :class="styles.card__info">
                <p>{{ character.name }}</p>
                <Ui
                  :image="character.image"
                  :name="character.name"
                  :status="character.status"
                  :species="character.species"
                  :id="character.id"
                />
              </div>
            </ion-card>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import TheHeader from "@/pages/header/TheHeader.vue";
import Ui from "@/features/add-to-cart/Ui.vue";
import { useFavoritesStore } from "@/features/add-to-cart/store";
import { IonCard, IonPage } from "@ionic/vue";
import { ref, onMounted, watch } from "vue";

interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
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
