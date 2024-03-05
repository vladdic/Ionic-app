<template>
  <div :class="styles.header__container">
    <button v-if="showMenuButton" @click.native="toggleContent"></button>

    <button v-if="cartMenuButton" @click.native="toggleContent"></button>

    <button
      v-if="showHomeButton"
      :class="styles.header__homelink"
      @click="goToHome"
    >
      Home
    </button>
    <div :class="styles.header__otherBtns">
      <button
        v-if="showAuthButton && showCartButton"
        @click="goToAuth"
      >auth</button>

      <button v-if="showCartButton" @click="goToCart">cart</button>
    </div>

    <div v-if="showSideMenu" :class="styles.menu__content">
      <div :class="styles.menu__close">
        <button @click.native="toggleContent"></button>
      </div>
      <div :class="styles.menu__links">
        <button @click="goToAbout" :class="styles.menu__links_about">
          About us
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from "./index";
import styles from "./styles.module.scss";
import { useRouter } from "vue-router";
import { computed } from "vue";

const store = useHeaderStore();
const router = useRouter();

const toggleContent = () => {
  store.toggleContent();
};

const goToHome = () => {
  store.showContent = false;
  router.push("/home").then(() => {
    window.location.reload();
  });
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
