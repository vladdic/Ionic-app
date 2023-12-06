<template>
  <ion-page>
    <TheHeader></TheHeader>
    <div :class="styles.main__content">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </ion-page>
</template>

<script setup>
import styles from "./styles.module.scss";
import TheHeader from "@/pages/header/TheHeader.vue";
import { IonPage } from "@ionic/vue";

const title = "Vlad dic";
const text =
  "We sell clothes and various goods, the app is at the release stage, wait for updates.";
</script>
