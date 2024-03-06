<template>
  <div :class="styles.header__container">
    <el-button v-if="showMenuButton" @click.native="toggleContent"></el-button>

    <el-button v-if="cartMenuButton" @click.native="toggleContent"></el-button>

    <el-button
      v-if="showHomeButton"
      :class="styles.header__homelink"
      @click="goToHome"
    >
      Home
    </el-button>
    <div :class="styles.header__otherBtns">
      <el-button v-if="showAuthButton && showCartButton" @click="goToAuth">
        auth
      </el-button>

      <el-button v-if="showCartButton" @click="goToCart">cart</el-button>
    </div>

    <div v-if="showSideMenu" :class="styles.menu__content">
      <div :class="styles.menu__close">
        <el-button @click.native="toggleContent"></el-button>
      </div>
      <div :class="styles.menu__links">
        <el-button @click="goToAbout" :class="styles.menu__links_about">
          About us
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from "./index";
import styles from "./styles.module.scss";
import { ElButton } from "element-plus";
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
