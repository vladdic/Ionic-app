<template>
  <ion-page>
    <div :class="styles.cart">
      <TheHeader></TheHeader>
      <h1 :class="styles.cart__title">Cart</h1>
      <div v-if="cartItems.length === 0" :class="styles.cart__message">
        <p>Your cart is empty.</p>
      </div>
      <div :class="styles.cards__container">
        <div :class="styles.card__list">
          <div v-for="item in cartItems" :key="item.id">
            <ion-card color="light" :class="styles.card">
              <img
                v-for="image in item.images"
                :src="image"
                :alt="`Image of ${item.description}`"
              />
              <div :class="styles.card__info">
                <p>{{ item.description }}</p>
                <p>Price: {{ item.price }}</p>
              </div>
            </ion-card>
          </div>
        </div>
      </div>
      <div :class="styles.cart__total">
        <p v-if="cartItems.length !== 0">Total Cost: {{ totalCost }}</p>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import TheHeader from "@/pages/header/TheHeader.vue";
import { useCartStore } from "@/features/add-to-cart/store";
import { Product } from "@/shared/api/typicode/apiTypes";
import { IonCard, IonPage } from "@ionic/vue";
import { ref, onMounted, watch, computed } from "vue";

const cartStore = useCartStore();
const cartItems = ref<Product[]>([]);

const updateCartItems = () => {
  cartItems.value = [...cartStore.getCartItems()];
};

const totalCost = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price, 0);
});

onMounted(() => {
  updateCartItems();
  watch(cartStore, updateCartItems);
});
</script>
