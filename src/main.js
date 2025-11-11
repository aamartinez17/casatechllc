import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n';
// 1. Import the 'install' function from the new package
import { install } from "vue3-recaptcha-v2";

// --- Import ALL CSS files first ---
import 'swiper/css/bundle'
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'aos/dist/aos.css';

// --- Import ALL JS files ---
import "bootstrap/dist/js/bootstrap.bundle.min.js" // <-- 2. I UNCOMMENTED THIS. You need it.
import AOS from 'aos';

// --- Dynamic Meta Tags --- //
// import { createMetaManager } from 'vue-meta' // (This is still commented out)
import { createHead } from '@unhead/vue/client'

// const metaManager = createMetaManager(false, { router });

// --- 3. Create the App ONCE ---
const head = createHead();
const app = createApp(App);


// --- Use Plugins ---
app.use(router);
app.use(i18n);
app.use(head);
// app.use(metaManager);

// 4. Use the new reCAPTCHA plugin correctly
app.use(install, {
  sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY, // Use your .env variable
});

// --- Mount App ---
router.isReady().then(() => {
  
  // 5. Mount the app (DO NOT create it again)
  app.mount('#app');

  // Initialize AOS *after* the app is mounted
  AOS.init({
    duration: 800,
    once: true,
    offset: 50
  });
});