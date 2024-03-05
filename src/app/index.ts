import "@/app/styles/index.scss";
import App from "./App.vue";
import { router, store } from "./providers";
import { createApp } from "vue";


export const app = createApp(App).use(router).use(store);
