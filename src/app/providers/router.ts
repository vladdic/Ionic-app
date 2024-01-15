import { createRouter, createWebHistory } from "@ionic/vue-router";
import { routes } from "@/pages/index";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
