<template>
  <div :class="styles.page">
    <TheHeader></TheHeader>
    <div :class="styles.page__content"><CardList></CardList></div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./header/TheHeader.vue";
import CardList from "./main/CardList.vue";
import styles from "./styles.module.scss";
</script>
