export const routes = [
    {path: '/', component: () => import('./TheHome.vue')},
    {path: '/cart', component: () => import("@/pages/favorites/FavoritesCards.vue")},
];