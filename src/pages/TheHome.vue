<template>
  <ion-page>
    <TheHeader></TheHeader>
    <CardList></CardList>
  </ion-page>
</template>

<script setup lang="ts">
import TheHeader from "./header/TheHeader.vue";
import CardList from "./main/CardList.vue";
import { IonPage } from "@ionic/vue";
</script>
