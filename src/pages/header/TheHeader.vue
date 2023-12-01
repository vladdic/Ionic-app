<template>
  <div :class="dynamicHeaderClass">
    <ion-button
      v-if="showMenuButton"
      @click.native="toggleContent"
      fill="clear"
      color="dark"
    >
      <ion-icon :icon="menu" size="large"></ion-icon>
    </ion-button>

    <ion-button
      v-if="showHomeButton"
      :class="styles.header__homelink"
      fill="clear"
      color="dark"
      @click="goToHome"
    >
      Home
    </ion-button>

    <ion-button
      v-if="showCartButton"
      fill="clear"
      color="dark"
      @click="goToCart"
    >
      <ion-icon :icon="basket" size="large"></ion-icon>
    </ion-button>

    <div v-if="showSideMenu" :class="styles.menu__content">
      <!-- Ваше боковое меню -->
      <div :class="styles.menu__close">
        <ion-button @click.native="toggleContent" fill="clear" color="dark">
          <ion-icon size="large" :icon="closeIcon"></ion-icon>
        </ion-button>
      </div>
      <div :class="styles.menu__links">
        <a href="#">About us</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from "./index";
import styles from "./styles.module.scss";
import { IonIcon, IonButton } from "@ionic/vue";
import { basket, menu, close } from "ionicons/icons";
import { useRouter } from "vue-router";
import { computed } from "vue";
const store = useHeaderStore();
const router = useRouter();

const closeIcon = close;

const toggleContent = () => {
  store.toggleContent();
};

const goToCart = () => {
  router.push("/cart");
};

const goToHome = () => {
  window.scrollTo(0, 0);
  router.push("/");
};

store.init();

const isCartRoute = router.currentRoute.value.path === "/cart";
const isHomeRoute = router.currentRoute.value.path === "/";

const dynamicHeaderClass = computed(() => {
  return {
    [styles.header__container]: true,
    [styles.dynamic_header_cart]: isCartRoute,
  };
});

const showMenuButton = computed(() => {
  return !store.showContent && (isCartRoute || isHomeRoute);
});

const showHomeButton = computed(() => {
  return !store.showContent && !isCartRoute;
});

const showCartButton = computed(() => {
  return !isCartRoute && !store.showContent;
});

const showSideMenu = computed(() => {
  return store.showContent && (isCartRoute || isHomeRoute);
});
</script>
