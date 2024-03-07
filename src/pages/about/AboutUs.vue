<template>
  <div>
    <TheHeader></TheHeader>
    <div class="main__content">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/pages/header/TheHeader.vue";

const title: string = "Vlad dic";
const text: string = "The app is at the release stage, wait for updates.";
</script>
<style scoped>
@import "./styles.module.scss";
</style>
