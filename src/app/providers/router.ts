import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import {routes} from '@/pages/index';

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})