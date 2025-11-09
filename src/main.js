import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. Import router first
import i18n from './i18n';

// --- Import ALL CSS files first ---
import 'swiper/css/bundle'
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css" // Bootstrap CSS
import 'aos/dist/aos.css';

// --- Import ALL JS files ---
// import "bootstrap/dist/js/bootstrap.bundle.min.js" // <-- 2. UNCOMMENTED THIS! Fixes your navbar.
import { createMetaManager } from 'vue-meta'
import AOS from 'aos';

// 3. Create the meta manager and EXPLICITLY pass it the router
const metaManager = createMetaManager(false, { router });

const app = createApp(App);

// --- Use Plugins ---
app.use(router);
app.use(i18n);
app.use(metaManager); // Use the pre-configured manager

// --- Mount App ---
router.isReady().then(() => {
  
  // Mount the app
  app.mount('#app');

  // Initialize AOS *after* the app is mounted
  AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: true,    // Whether animation should happen only once
    offset: 50     // Triggers animation 50px before the element's top reaches the viewport
  });
});