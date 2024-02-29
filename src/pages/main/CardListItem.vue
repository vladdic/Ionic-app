<template>
  <ion-card :class="styles.card" color="light">
    <button @click="setOpen(true)">
      <img :src="props.image" alt="Images of each element" />
    </button>
    <div :class="styles.card__body">
      <span>{{ props.name }}</span>
      <span :class="statusClass">
        {{ props.status }} - {{ props.species }}
      </span>

      <Ui
        :class="styles.btn__self"
        :image="props.image"
        :name="props.name"
        :status="props.status"
        :species="props.species"
        :id="props.id"
      />
    </div>
  </ion-card>

  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="setOpen(false)">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card :class="styles.card" color="light">
        <img :src="props.image" alt="Images of each element" />
        <div :class="styles.card__body">
          <span>{{ props.name }}</span>
          <span>{{ props.location.name }}</span>
          <span :class="statusClass">
            {{ props.status }} - {{ props.species }}
          </span>
        </div>
      </ion-card></ion-content
    >
  </ion-modal>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import Ui from "@/features/add-to-cart/Ui.vue";
import {
  IonModal,
  IonCard,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
} from "@ionic/vue";
import { ref, computed } from "vue";

export interface Props {
  image: string;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  created: string;
  gender: string;
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
  location: {
    type: Object as () => { name: string },
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

let isOpen = ref<boolean>(false);

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

const setOpen = (open: boolean) => (isOpen.value = open);
</script>
