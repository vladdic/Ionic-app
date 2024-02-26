<template>
  <ion-card :class="styles.card" color="light">
    <img :src="props.image" alt="Images of each element" />
    <div class="card-body">
      <span>{{ props.name }}</span>
      <span :class="statusClass" class="status">
        {{ props.status }} - {{ props.species }}
      </span>
      <Ui
        :image="props.image"
        :name="props.name"
        :status="props.status"
        :species="props.species"
        :id="props.id"
      />
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import Ui from "@/features/add-to-cart/Ui.vue";
import { IonCard } from "@ionic/vue";
import { computed } from "vue";
import { defineProps } from "vue";

export interface Props {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
}

const props: Props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const statusClass = computed(() => {
  switch (props.status) {
    case "Alive":
      return "status__alive";
    case "Dead":
      return "status__dead";
    case "unknown":
      return "status__unknown";
    default:
      return "";
  }
});
</script>
