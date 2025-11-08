import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const i18n = createI18n({
  // --- IMPORTANT ---
  // Set 'legacy: false' to use the Composition API
  // -----------------
  legacy: false,
  
  // Set the default language
  locale: 'en',
  
  // Set a fallback language
  fallbackLocale: 'en',
  
  // Load your translation messages
  messages: {
    en: en,
    es: es
  }
});

export default i18n;