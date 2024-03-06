<template>
  <div class="page">
    <TheHeader></TheHeader>
    <div class="page__content"><CardList></CardList></div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./header/TheHeader.vue";
import CardList from "./main/CardList.vue";
import "./styles.module.scss";
</script>
