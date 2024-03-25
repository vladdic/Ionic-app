<template>
  <div>
    <div class="main__content">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const title: string = "Vlad dic";
const text: string = "The app is at the release stage, wait for updates.";
</script>
<style scoped>
@import "./styles.module.scss";
</style>
