export const routes = [
    {path: '/', component: () => import('./TheHome.vue')},
    {path: '/cart', component: () => import("@/pages/favorites/FavoritesCards.vue")},
    {path: '/about', component: () => import("@/pages/about/AboutUs.vue")},
];