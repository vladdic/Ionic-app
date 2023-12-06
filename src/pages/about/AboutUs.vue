<template>
  <ion-page>
    <TheHeader></TheHeader>
    <div :class="styles.main__content">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import TheHeader from "@/pages/header/TheHeader.vue";
import { IonPage } from "@ionic/vue";

const title: string = "Vlad dic";
const text: string =
  "We sell clothes and various goods, the app is at the release stage, wait for updates.";
</script>
