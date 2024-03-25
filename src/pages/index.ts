import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/main/MainPage.vue"),
  },
  {
    path: "/auth",
    name: "Authorization",
    component: () => import("@/features/authorization/TheAuthorization.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/pages/favorites/FavoritesCards.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/about/AboutUs.vue"),
  },
];
