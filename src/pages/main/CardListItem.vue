<template>
  <el-card :class="styles.card" color="light">
    <el-button plain @click="openModal">
      <img :src="props.image" alt="Images of each element" />
    </el-button>
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
  </el-card>

  <el-dialog v-model="isOpen" width="500">
    <div :class="styles.modal">
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
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import { ElButton, ElDialog, ElCard } from "element-plus";
import Ui from "@/features/add-to-cart/Ui.vue";
import { ref } from "vue";

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

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>
