import AppHome from './components/HomeHero.vue'
import AboutMe from './components/AboutMe.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: AppHome },
  { path: '/AboutMe', component: AboutMe },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;