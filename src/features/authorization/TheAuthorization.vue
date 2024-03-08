<template>
  <div class="container">
    <div class="home_btn">
      <el-button @click="goHome" type="info" plain> go back </el-button>
    </div>
    <div class="login">
      <span v-if="!loggedIn">Sign in with Google</span>
      <el-button @click="login" v-if="!loggedIn" type="info" plain>
        Log in
      </el-button>
      <span v-if="loggedIn">Logged in as: {{ userEmail }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ElButton } from "element-plus";
import { ref } from "vue";
import {
  getAccessToken,
  GOOGLE_AUTH_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  GOOGLE_USER_INFO_URI,
} from "./config";
import axios from "axios";

const router = useRouter();

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

handleAuthorizationCode();
</script>
<style scoped>
@import "./styles.module.scss";
</style>
