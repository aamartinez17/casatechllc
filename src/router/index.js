import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue';
import BlogDetailView from '../views/BlogDetailView.vue';
import i18n from '../i18n';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/es',
      name: 'home-es',
      component: HomeView
    },
    {
      path: '/home',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/es/home',
      name: 'homeview-es',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/es/services',
      name: 'services-es',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/services/startup-tech',
      name: 'startup-tech',
      component: () => import('../views/StartupTechView.vue')
    },
    {
      path: '/es/services/startup-tech',
      name: 'startup-tech-es',
      component: () => import('../views/StartupTechView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/es/portfolio',
      name: 'portfolio-es',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/es/blog',
      name: 'blog-es',
      component: BlogView
    },
    {
      path: '/blog/:slug', // <-- (Dynamic route for single posts)
      name: 'blog-detail',
      component: BlogDetailView
    },
    {
      path: '/es/blog/:slug', // <-- (Dynamic route for single posts)
      name: 'blog-detail-es',
      component: BlogDetailView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/es/contact',
      name: 'contact-es',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/es/about',
      name: 'about-es',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/thank-you',
     name: 'thank-you',
      component: () => import('../views/ThankYouView.vue')
    }, 
    {
      path: '/es/thank-you',
     name: 'thank-you-es',
      component: () => import('../views/ThankYouView.vue')
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

// This guard runs before every page load.
// It reads the URL and sets the language.
router.beforeEach((to, from, next) => {
  
  // 1. Check if the URL path starts with /es
  const lang = to.path.startsWith('/es') ? 'es' : 'en';

  // 2. Set the global i18n locale
  i18n.global.locale.value = lang;
  
  // 3. Save the preference for future visits
  localStorage.setItem('user-locale', lang);
  
  // 4. Continue to the requested page
  next();
});


export default router