<template>
  <ion-card :class="styles.card" color="light">
    <ion-button fill="clear" size="small" color="light" @click="setOpen(true)">
      <img :src="props.image" alt="Images of each element" />
    </ion-button>
    <div :class="styles.card__body">
      <h2>{{ props.name }}</h2>
      <div>
        <span :class="styles.card__body_species"> Species: </span>
        <span>{{ props.species }} </span>
      </div>
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
      <div :class="styles.modal">
        <ion-card color="light">
          <div :class="styles.modal__img">
            <img :src="props.image" alt="Images of each element" />
          </div>
          <div :class="styles.modal__body">
            <h2>{{ props.name }}</h2>
            <div :class="styles.modal__info">
              <div>
                <span :class="styles.modal__info_firstLetter">Species: </span>
                <span>{{ props.species }} </span>
              </div>
              <div>
                <span :class="styles.modal__info_firstLetter">Status: </span>
                <span>{{ props.status }} </span>
              </div>
              <div>
                <span :class="styles.modal__info_firstLetter">Gender: </span>
                <span>{{ props.gender }}</span>
              </div>
              <div>
                <span :class="styles.modal__info_firstLetter">Origin: </span>
                <span>{{ props.origin.name }}</span>
              </div>
              <div>
                <span :class="styles.modal__info_firstLetter">Location: </span>
                <span>{{ props.location.name }}</span>
              </div>
              <div>
                <span :class="styles.modal__info_firstLetter">Created: </span>
                <span>{{ props.created }}</span>
              </div>
            </div>
          </div>
        </ion-card>
      </div>
    </ion-content>
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
  origin: { name: string };
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
  origin: {
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
