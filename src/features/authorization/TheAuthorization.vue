<template>
  <ion-page>
    <div :class="styles.container">
      <div :class="styles.home_btn">
        <ion-button @click="goHome">go to home</ion-button>
      </div>
      <div :class="styles.login">
        <ion-button @click="login" v-if="!loggedIn"
          >Log in with Google</ion-button
        >
        <ion-label :class="styles.login__label" v-if="loggedIn"
          >Logged in as: {{ userEmail }}</ion-label
        >
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
import { router } from "@/app/providers/router";
import { ref } from "vue";
import { IonButton, IonPage, IonLabel } from "@ionic/vue";
import {
  getAccessToken,
  GOOGLE_AUTH_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  GOOGLE_USER_INFO_URI,
} from "./config";
import axios from "axios";

const loggedIn = ref(false);
const userEmail = ref("");

const login = async () => {
  try {
    const authUrl = `${GOOGLE_AUTH_URI}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      GOOGLE_REDIRECT_URI
    )}&response_type=code&scope=email`;
    window.location.href = authUrl;
  } catch (error) {
    console.error("Failed to initiate login:", error);
  }
};

const goHome = () => {
  router.push("/home");
};
// Обработка кода, полученного после успешной авторизации Google
const handleAuthorizationCode = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (code) {
    const accessToken = await getAccessToken(code);
    if (accessToken) {
      try {
        const response = await axios.get(GOOGLE_USER_INFO_URI, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        loggedIn.value = true;
        userEmail.value = response.data.email;
      } catch (error) {
        console.error("Error getting user info:", error);
      }
    } else {
      console.error("Failed to get access token");
    }
  } else {
    console.error("Authorization code not found");
  }
};

// Вызываем обработку кода после загрузки страницы
handleAuthorizationCode();
</script>
