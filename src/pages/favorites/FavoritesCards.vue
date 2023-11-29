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
          <div v-for="item in cartItems">
            <ion-card color="light" :class="styles.card">
              <img
                v-for="image in item.images"
                :src="image"
                alt="Image of each element"
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

<script setup>
import styles from "./styles.module.scss";
import TheHeader from "@/pages/header/TheHeader.vue";
import { useCartStore } from "./index";
import { IonCard } from "@ionic/vue";
import { IonPage } from "@ionic/vue";
import { ref, onMounted, watch, computed } from "vue";

const cartStore = useCartStore();
const cartItems = ref([]);

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
