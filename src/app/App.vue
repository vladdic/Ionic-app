<template>
  <MainLayout>
    <template v-slot:header>
      <TheHeader />
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/pages/MainLayout.vue";
import TheHeader from "@/pages/header/TheHeader.vue";
</script>
