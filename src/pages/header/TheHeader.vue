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
      v-if="cartMenuButton"
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
    <div>
      <ion-button
        v-if="showAuthButton && showCartButton"
        fill="clear"
        color="dark"
        @click="goToAuth"
      >
        <ion-icon :icon="logoGoogle" size="large"></ion-icon>
      </ion-button>

      <ion-button
        v-if="showCartButton"
        fill="clear"
        color="dark"
        @click="goToCart"
      >
        <ion-icon :icon="basket" size="large"></ion-icon>
      </ion-button>
    </div>

    <div v-if="showSideMenu" :class="styles.menu__content">
      <div :class="styles.menu__close">
        <ion-button @click.native="toggleContent" fill="clear" color="dark">
          <ion-icon size="large" :icon="closeIcon"></ion-icon>
        </ion-button>
      </div>
      <div :class="styles.menu__links">
        <ion-button
          @click="goToAbout"
          fill="clear"
          color="dark"
          :class="styles.menu__links_about"
          >About us</ion-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from "./index";
import styles from "./styles.module.scss";
import { IonIcon, IonButton } from "@ionic/vue";
import { basket, menu, close, logoGoogle } from "ionicons/icons";
import { useRouter } from "vue-router";
import { computed } from "vue";

const store = useHeaderStore();
const router = useRouter();

const closeIcon = close;

const toggleContent = () => {
  store.toggleContent();
};

const goToHome = () => {
  window.scrollTo(0, 0);
  store.showContent = false;
  router.push("/home");
};

const goToCart = () => {
  store.showContent = false;
  router.push("/cart");
};

const goToAuth = () => {
  router.push("/auth");
};

const goToAbout = () => {
  window.scrollTo(0, 0);
  router.push("/about");
};

const isCartRoute = router.currentRoute.value.path === "/cart";
const isHomeRoute = router.currentRoute.value.path === "/home";
const isAuthRoute = router.currentRoute.value.path === "/auth";

const dynamicHeaderClass = computed(() => {
  return {
    [styles.header__container]: true,
    [styles.dynamic_header_cart]: isCartRoute,
  };
});

const showMenuButton = computed(() => {
  return store.isSmallScreen && isHomeRoute;
});

const cartMenuButton = computed(() => {
  return !store.showContent && isCartRoute;
});

const showHomeButton = computed(() => {
  return !isCartRoute;
});

const showCartButton = computed(() => {
  return !isCartRoute;
});

const showAuthButton = computed(() => {
  return !isAuthRoute;
});

const showSideMenu = computed(() => {
  return store.showContent && (isCartRoute || isHomeRoute);
});
store.init();
</script>
