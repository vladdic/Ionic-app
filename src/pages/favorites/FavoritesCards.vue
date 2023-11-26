<template>
  <div id="favorites">
    <div class="favorites__title"><h1>Favorite cards</h1></div>
    <div class="favorites__empty">
      <p>description="Empty characters"></p>
    </div>
    <div>
      <ion-card color="light">
        <img alt="Images of each element" />
        <p>Price:</p>
      </ion-card>
    </div>
  </div>
</template>
<script setup>
import { IonCard } from "@ionic/vue";
</script>
