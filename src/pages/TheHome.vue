<template>
  <ion-page>
    <div :class="styles.page">
      <TheHeader></TheHeader>
      <div :class="styles.page__content"><CardList></CardList></div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import TheHeader from "./header/TheHeader.vue";
import CardList from "./main/CardList.vue";
import styles from "./styles.module.scss";
import { IonPage } from "@ionic/vue";
</script>
