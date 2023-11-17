<template>
  <div class="header__container">
    <div class="header__links">
      <a href="#">New</a>
      <a href="#">Brands</a>
      <a href="#">Apparel</a>
    </div>
    <router-link to="/" class="header__home-link">Home</router-link>
    <div class="header__icons">
      <ion-button fill="clear" color="dark">
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
      <ion-button fill="clear" color="dark">
        <ion-icon slot="icon-only" :icon="person"></ion-icon>
      </ion-button>
      <ion-button fill="clear" color="dark">
        <ion-icon slot="icon-only" :icon="basket"></ion-icon>
      </ion-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IonIcon, IonButton } from "@ionic/vue";
import { search, basket, person } from "ionicons/icons";
</script>
