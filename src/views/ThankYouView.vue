<template>
  <div class="thank-you-view">
    <PageHeader 
      :title="t('contact.thanks.title')"
      :subtitle="t('contact.thanks.subtitle')"
      backgroundImage="/images/contact-hero.jpg" 
    />
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
/* You can add custom styles here if you want */
.thank-you-view {
  text-align: center;
}
</style>