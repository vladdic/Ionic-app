<template>
  <div class="header__container">
    <div class="header__links" v-show="isSmallScreen">
      <ion-button @click.native="toggleContent" fill="clear" color="dark">
        <ion-icon :icon="menu"></ion-icon>
      </ion-button>
    </div>

    <div class="header__links" v-show="!isSmallScreen">
      <a href="#">New</a>
      <a href="#">Brands</a>
      <a href="#">Apparel</a>
    </div>

    <router-link to="/" class="header__home-link">Home</router-link>

    <div class="header__icons">
      <ion-button fill="clear" color="dark" v-show="!isSmallScreen">
        <ion-icon :icon="search"></ion-icon>
      </ion-button>
      <ion-button fill="clear" color="dark" v-show="!isSmallScreen">
        <ion-icon :icon="person"></ion-icon>
      </ion-button>
      <ion-button fill="clear" color="dark">
        <ion-icon :icon="basket"></ion-icon>
      </ion-button>
    </div>

    <div v-if="showContent" class="menu__content">
      <div class="menu__close">
        <ion-button @click.native="toggleContent" fill="clear" color="dark">
          <ion-icon :icon="closeIcon"></ion-icon>
        </ion-button>
      </div>
      <div class="menu__links">
        <router-link to="/" class="header__home-link">Home</router-link>
        <a href="#">New</a>
        <a href="#">Brands</a>
        <a href="#">Apparel</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { IonIcon, IonButton } from "@ionic/vue";
import { search, basket, menu, person, close } from "ionicons/icons";

const showContent = ref(false);
const isSmallScreen = ref(window.innerWidth <= 767);
const closeIcon = close;

const toggleContent = () => {
  showContent.value = !showContent.value;
};

const handleResize = () => {
  isSmallScreen.value = window.innerWidth <= 767;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
