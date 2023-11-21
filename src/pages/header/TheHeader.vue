<template>
  <div :class="styles.header__container">
    <div :class="styles.header__links" v-show="store.isSmallScreen">
      <ion-button @click.native="toggleContent" fill="clear" color="dark">
        <ion-icon :icon="menu" size="large"></ion-icon>
      </ion-button>
    </div>

    <div :class="styles.header__links" v-show="!store.isSmallScreen">
      <a href="#">New</a>
      <a href="#">Brands</a>
      <a href="#">Apparel</a>
    </div>

    <router-link to="/" :class="styles.header__homelink">Home</router-link>

    <div :class="styles.header__icons">
      <ion-button fill="clear" color="dark" v-show="!store.isSmallScreen">
        <ion-icon :icon="search" size="large"></ion-icon>
      </ion-button>
      <ion-button fill="clear" color="dark" v-show="!store.isSmallScreen">
        <ion-icon :icon="person" size="large"></ion-icon>
      </ion-button>
      <ion-button fill="clear" color="dark">
        <ion-icon :icon="basket" size="large"></ion-icon>
      </ion-button>
    </div>

    <div v-if="store.showContent" :class="styles.menu__content">
      <div :class="styles.menu__close">
        <ion-button @click.native="toggleContent" fill="clear" color="dark">
          <ion-icon size="large" :icon="closeIcon"></ion-icon>
        </ion-button>
      </div>
      <div :class="styles.menu__links">
        <router-link to="/" :class="styles.header__homelink">Home</router-link>
        <a href="#">New</a>
        <a href="#">Brands</a>
        <a href="#">Apparel</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from "./index";
import styles from "./styles.module.scss";
import { onMounted, onBeforeUnmount } from "vue";
import { IonIcon, IonButton } from "@ionic/vue";
import { search, basket, menu, person, close } from "ionicons/icons";
const store = useHeaderStore();

const closeIcon = close;

const toggleContent = () => {
  store.toggleContent();
};

onMounted(() => {
  store.init();
});

onBeforeUnmount(() => {
  store.destroy();
});
</script>
