<template>
  <ion-page>
    <TheHeader></TheHeader>
    <div :class="styles.cart">
      <h1 :class="styles.cart__title">Shopping Cart</h1>
      <div v-if="cartItems.length === 0" :class="styles.cart__message">
        <p>Your shopping cart is empty.</p>
      </div>
      <div v-else :class="styles.cart__items">
        <div
          v-for="item in cartItems"
          :key="item.id"
          :class="styles.cart__item"
        >
          <ion-card color="light">
            <img
              v-for="image in item.images"
              :src="image"
              alt="Images of each element"
            />
            <p>Price: {{ item.price }}</p>
          </ion-card>
        </div>
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
import { ref, onMounted, watch } from "vue";

const cartStore = useCartStore();
const cartItems = ref([]);

const updateCartItems = () => {
  cartItems.value = [...cartStore.getCartItems()];
  console.log(cartStore.getCartItems());
};

onMounted(() => {
  updateCartItems();
  watch(cartStore, updateCartItems);
});
</script>
