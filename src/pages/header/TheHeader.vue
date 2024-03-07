<template>
  <div class="header__container">
    <el-button v-if="showMenuButton" @click.native="toggleContent"></el-button>

    <el-button v-if="cartMenuButton" @click.native="toggleContent"></el-button>

    <el-button v-if="showHomeButton" class="header__homelink" @click="goToHome">
      Home
    </el-button>
    <div class="header__otherBtns">
      <el-button v-if="showAuthButton && showCartButton" @click="goToAuth">
        auth
      </el-button>

      <el-button v-if="showCartButton" @click="goToCart">cart</el-button>
    </div>

    <div v-if="showSideMenu" class="menu__content">
      <div class="menu__close">
        <el-button @click.native="toggleContent"></el-button>
      </div>
      <div class="menu__links">
        <el-button @click="goToAbout" class="menu__links_about">
          About us
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from "./index";
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

<style scoped>
@import "./styles.module.scss";
</style>
