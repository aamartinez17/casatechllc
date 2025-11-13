<template>
  <div v-if="!hasConsented" class="cookie-banner-overlay">
    <div class="cookie-banner" data-aos="fade-up">
      <div class="cookie-text">
        <p class="mb-1">{{ t('cookie.message') }}</p>
        <p class="small mb-0">{{ t('cookie.submessage') }}</p>
      </div>
      <div class="cookie-actions">
        <button class="btn btn-brand-primary btn-sm" @click="acceptCookies">
          {{ t('cookie.accept') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
// 2. Remove 'ref' and 'onMounted', as they are no longer needed
import { useCookieConsent } from '@/composables/useCookieConsent.js';

const { t } = useI18n();

// 3. Remove the local 'isVisible' ref
// const isVisible = ref(false); 

// 4. Get the global state. This is all you need!
// Your composable already checks localStorage.
const { hasConsented, acceptCookies } = useCookieConsent();

</script>

<style scoped>
/* Your styles are all 100% correct. No changes needed here. */
@import '@/assets/_variables.css';

.cookie-banner-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1040; /* Just below the navbar modal */
  padding: var(--spacing-md);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.cookie-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
  width: 100%;
  max-width: 900px;
  background: var(--color-background); /* White background */
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
}

.cookie-text p {
  margin: 0;
  color: var(--color-text-dark);
}

.cookie-text .small {
  color: var(--secondary-dark-grey);
}

.cookie-actions .btn {
  white-space: nowrap; /* Prevents button text from wrapping */
}

/* Custom button style */
.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}
.btn-brand-primary:hover {
  background-color: color-mix(in srgb, var(--color-primary), black 20%);
  border-color: color-mix(in srgb, var(--color-primary), black 20%);
}

/* Mobile responsive */
@media (max-width: 767.98px) {
  .cookie-banner {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
}
</style>