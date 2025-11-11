<template>
  <div class="thank-you-view">
    <PageHeader 
      :title="t('contact.thanks.title')"
      :subtitle="t('contact.thanks.subtitle')"
      backgroundImage="/" 
    />

    <section class="page-section text-center">
      <div class="container">
        <p class="lead">{{ t('contact.thanks.message') }}</p>
        <router-link to="/" class="btn btn-brand-primary btn-lg mt-4">
          <i class="fas fa-home me-2"></i>
          {{ t('contact.thanks.button') }}
        </router-link>
      </div>
    </section>
    </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
@import '@/assets/_variables.css';

.page-section {
  padding: var(--spacing-xl) 0;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
  padding: 0.75rem 1.5rem;
}
.btn-brand-primary:hover {
  background-color: color-mix(in srgb, var(--color-primary), black 20%);
  border-color: color-mix(in srgb, var(--color-primary), black 20%);
}
</style>