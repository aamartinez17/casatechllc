<template>
  <div class="startup-tech-view">
    <section class="hero-section text-white">
      <div class="container" data-aos="fade-in">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-3 fw-bold">{{ t('startup.hero.title') }}</h1>
            <p class="lead my-4">{{ t('startup.hero.subtitle') }}</p>
            <router-link to="/contact" class="btn btn-brand-secondary btn-lg px-4">{{ t('startup.hero.cta') }}</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="problem">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 class="section-heading">{{ t('startup.problem.title') }}</h2>
            <p class="lead text-muted">{{ t('startup.problem.p1', ['@'])  }}</p>
            <p class="lead text-muted">{{ t('startup.problem.p2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light" id="offerings">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('startup.offerings.title') }}</h2>
          <p class="text-muted lead mb-5">{{ t('startup.offerings.subtitle'), ['@']  }}</p>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 shadow-sm border-0 text-center p-4">
              <div class="icon-wrapper-secondary">
                <i class="fas fa-envelope"></i>
              </div>
              <h4 class="mt-3">{{ t('startup.offerings.card1.title') }}</h4>
              <p class="text-muted">{{ t('startup.offerings.card1.desc', ['@'])  }}</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 shadow-sm border-0 text-center p-4">
              <div class="icon-wrapper-secondary">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h4 class="mt-3">{{ t('startup.offerings.card2.title') }}</h4>
              <p class="text-muted">{{ t('startup.offerings.card2.desc') }}</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm border-0 text-center p-4">
              <div class="icon-wrapper-secondary">
                <i class="fas fa-wifi"></i>
              </div>
              <h4 class="mt-3">{{ t('startup.offerings.card3.title') }}</h4>
              <p class="text-muted">{{ t('startup.offerings.card3.desc') }}</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 shadow-sm border-0 text-center p-4">
              <div class="icon-wrapper-secondary">
                <i class="fas fa-globe"></i>
              </div>
              <h4 class="mt-3">{{ t('startup.offerings.card4.title') }}</h4>
              <p class="text-muted">{{ t('startup.offerings.card4.desc') }}</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 shadow-sm border-0 text-center p-4">
              <div class="icon-wrapper-secondary">
                <i class="fas fa-laptop"></i>
              </div>
              <h4 class="mt-3">{{ t('startup.offerings.card5.title') }}</h4>
              <p class="text-muted">{{ t('startup.offerings.card5.desc') }}</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm border-0 text-center p-4">
              <div class="icon-wrapper-secondary">
                <i class="fas fa-comments"></i>
              </div>
              <h4 class="mt-3">{{ t('startup.offerings.card6.title') }}</h4>
              <p class="text-muted">{{ t('startup.offerings.card6.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="process">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('startup.process.title') }}</h2>
          <p class="text-muted lead mb-5">{{ t('startup.process.subtitle') }}</p>
        </div>
        <div class="row text-center">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <span class="fa-stack fa-4x mb-4">
              <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
              <i class="fas fa-search fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">{{ t('startup.process.step1.title') }}</h4>
            <p class="text-muted">{{ t('startup.process.step1.desc') }}</p>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <span class="fa-stack fa-4x mb-4">
              <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
              <i class="fas fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">{{ t('startup.process.step2.title') }}</h4>
            <p class="text-muted">{{ t('startup.process.step2.desc') }}</p>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <span class="fa-stack fa-4x mb-4">
              <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
              <i class="fas fa-headset fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">{{ t('startup.process.step3.title') }}</h4>
            <p class="text-muted">{{ t('startup.process.step3.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container text-center" data-aos="fade-up">
        <h2 class="display-5 fw-bold">{{ t('startup.cta.title') }}</h2>
        <p class="lead my-4">{{ t('startup.cta.subtitle') }}</p>
        <router-link to="/contact" class="btn btn-brand-primary btn-lg px-5 py-3">{{ t('startup.cta.button') }}</router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import { usePageMeta } from '@/composables/usePageMeta.js';

const { t } = useI18n();

const pageMeta = computed(() => ({
  title: t('startup.hero.title'),
  description: t('startup.hero.subtitle'),
  path: '/services/startup-tech', // The base (English) path
  image: '/images/servicesview-header.png' // The specific image for this page
}));

usePageMeta(pageMeta);

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>

<style scoped>
@import '@/assets/_variables.css';

/* General Page Styling */
.page-section {
  padding: var(--spacing-xl) 0;
}
.section-heading {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-dark);
  font-size: 2.5rem;
}
.bg-light {
  background-color: #f8f9fa;
}

/* 1. Hero Section */
.hero-section {
  background-color: var(--color-primary);
  padding: calc(var(--spacing-top) + var(--spacing-lg)) 0 var(--spacing-lg);
}
.hero-section .lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 800px;
  margin: 0 auto;
}
.btn-brand-secondary {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border: 1px solid var(--color-secondary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}
.btn-brand-secondary:hover {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

/* 3. Offerings Section */
.offerings .card {
  border: none;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
}
.offerings .card:hover {
  transform: translateY(-5px);
  box-shadow: var(--primary-shadow);
}
.icon-wrapper-secondary {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  font-size: 2rem;
  margin: 0 auto var(--spacing-md);
}
.offerings .card h4 {
  font-family: var(--font-family-headings);
  color: var(--color-primary);
  font-weight: 600;
}

/* 4. Process Section */
.text-primary-icon {
  color: var(--color-primary);
}

/* 5. CTA Section */
.cta-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-secondary);
  color: var(--color-primary);
}
.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}
.cta-section .btn-brand-primary:hover {
  background-color: var(--color-text-light);
  color: var(--color-primary);
  border-color: var(--color-primary);
}
</style>