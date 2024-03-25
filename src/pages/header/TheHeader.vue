<template>
  <header class="header__container">
    <el-button
      plain
      v-if="showMenuButton"
      @click.native="toggleContent"
      type="info"
    >
      <el-icon><MoreFilled /></el-icon>
    </el-button>

    <el-button
      plain
      v-if="cartMenuButton"
      @click.native="toggleContent"
      type="info"
    >
      <el-icon><MoreFilled /></el-icon>
    </el-button>

    <el-button
      plain
      v-if="showHomeButton"
      class="header__homelink"
      @click="goToHome"
      type="info"
    >
      Home
    </el-button>
    <div class="header__otherBtns">
      <el-button
        plain
        v-if="showAuthButton && showCartButton"
        @click="goToAuth"
        type="info"
      >
        <el-icon><User /></el-icon>
      </el-button>

      <el-button plain v-if="showCartButton" @click="goToCart" type="info"
        ><el-icon> <ShoppingCart /></el-icon
      ></el-button>
    </div>

    <div v-if="showSideMenu" class="menu__content">
      <div class="menu__close">
        <el-button @click.native="toggleContent">
          <el-icon><Close /></el-icon>
        </el-button>
      </div>
      <div class="menu__links">
        <el-button
          plain
          @click="goToAbout"
          class="menu__links_about"
          type="info"
        >
          About us
        </el-button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useHeaderStore } from "./index";
import { ElButton, ElIcon } from "element-plus";
import { User, ShoppingCart, MoreFilled, Close } from "@element-plus/icons-vue";
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
