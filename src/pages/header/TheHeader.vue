<template>
  <div :class="styles.header__container">
    <div :class="styles.header__links" v-show="store.isSmallScreen">
      <ion-button @click.native="toggleContent" fill="clear" color="dark">
        <ion-icon :icon="menu" size="large"></ion-icon>
      </ion-button>
    </div>

    <ion-button
      :class="styles.header__homelink"
      fill="clear"
      color="dark"
      @click="goToHome"
    >
      Home
    </ion-button>
    <div :class="styles.header__icons">
      <ion-button fill="clear" color="dark" @click="goToCart">
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
const store = useHeaderStore();

const closeIcon = close;
const router = useRouter();

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
</script>
