<template>
  <div :class="styles.card__list">
    <CardListItem
      v-for="character in charactersList"
      :name="character.name"
      :status="character.status"
      :species="character.species"
      :image="character.image"
      :gender="character.gender"
      :location="character.location"
      :origin="character.origin"
      :created="character.created"
      :id="character.id"
    />
  </div>
</template>

<script setup lang="ts">
import CardListItem from "./CardListItem.vue";
import { useCardStore } from "./index";
import { Character } from "@/shared/api/typicode/apiTypes";
import styles from "./styles.module.scss";
import { ref, onMounted } from "vue";

const store = useCardStore();

const charactersList = ref<Character[]>([]);

onMounted(async () => {
  try {
    await store.fetchData(store.currentPage);
    charactersList.value = store.charactersList;
  } catch (error) {
    console.error("Error in cardList.vue:", error);
  }
});
</script>
