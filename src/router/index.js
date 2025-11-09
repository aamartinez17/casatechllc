import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue';
import BlogDetailView from '../views/BlogDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/services/startup-tech',
      name: 'garage-cleanout',
      component: () => import('../views/StartupTechView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/blog', // <-- ADD THIS
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:slug', // <-- ADD THIS (Dynamic route for single posts)
      name: 'blog-detail',
      component: BlogDetailView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  ],
    scrollBehavior(to, from, savedPosition) {
         if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        // behavior: 'smooth',
      };
    }
    return { top: 0 };
    },
})


export default router