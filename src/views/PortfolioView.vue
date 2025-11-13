<template>
  <div class="portfolio-view">
    <PageHeader 
      :title="t('portfolio.hero.title')"
      :subtitle="t('portfolio.hero.subtitle')"
      backgroundImage="/images/portfolioview-header.png" 
    />

    <section class="page-section" id="portfolio-gallery">
      <div class="container">
        <!-- <div class="row" data-aos="fade-up">
          <div class="col-lg-12 text-center mb-5">
            <button class="btn btn-filter" :class="{ 'active': activeFilter === 'all' }" @click="setFilter('all')">{{ t('portfolio.filter.all') }}</button>
            <button class="btn btn-filter" :class="{ 'active': activeFilter === 'web' }" @click="setFilter('web')">{{ t('portfolio.filter.web') }}</button>
            <button class="btn btn-filter" :class="{ 'active': activeFilter === 'smb' }" @click="setFilter('smb')">{{ t('portfolio.filter.smb') }}</button>
            <button class="btn btn-filter" :class="{ 'active': activeFilter === 'it' }" @click="setFilter('it')">{{ t('portfolio.filter.it') }}</button>
          </div>
        </div> -->

        <div class="row">
          <div v-for="project in filteredProjects" :key="project.id" class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card portfolio-card h-100">
              <img :src="project.imageUrl" class="card-img-top" :alt="project.title">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ locale === 'es' ? project.title_es : project.title }}</h5>
                <p class="card-text text-muted">{{ locale === 'es' ? project.description_es : project.description }}</p>
                <span class="badge bg-primary-badge mb-3">{{ t(`portfolio.categories.${project.category}`) }}</span>
                
                <a v-if="project.projectUrl" 
                   :href="project.projectUrl" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="btn btn-brand-primary mt-auto">
                   {{ t('portfolio.visitSite') }} <i class="fas fa-external-link-alt ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light" id="client-logos">
        <div class="container">
            <div class="text-center" data-aos="fade-up">
            <h2 class="section-heading">{{ t('portfolio.clients.title') }}</h2>
            <p class="text-muted lead mb-5">{{ t('portfolio.clients.subtitle') }}</p>
            </div>
            
            <LogoCarousel :logos="clientLogos" data-aos="fade-up" />
            
        </div>
    </section>

    <section class="cta-section">
      <div class="container text-center" data-aos="fade-up">
        <h2 class="display-5 fw-bold">{{ t('portfolio.cta.title') }}</h2>
        <p class="lead my-4">{{ t('portfolio.cta.subtitle') }}</p>
        <router-link to="/contact" class="btn btn-brand-primary btn-lg px-5 py-3">{{ t('portfolio.cta.button') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import PageHeader from '@/components/PageHeader.vue';

// === UPDATED IMPORT PATHS ===
import { allProjects as projectData } from '@/assets/data/ProjectData.js';
import { clientLogos as logoData } from '@/assets/data/PartnerData.js';
import LogoCarousel from '@/components/LogoCarousel.vue';

import { usePageMeta } from '@/composables/usePageMeta.js';

const { t, locale } = useI18n();
const swiperModules = [Autoplay];

const pageMeta = computed(() => ({
  title: t('portfolio.hero.title'),
  description: t('portfolio.hero.subtitle'),
  path: '/portfolio', // The base (English) path
  image: '/images/portfolioview-header.png' // The specific image for this page
}));

usePageMeta(pageMeta);

const allProjects = ref(projectData);
const clientLogos = ref(logoData);

const activeFilter = ref('all');

const setFilter = (filter) => {
  activeFilter.value = filter;
};

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return allProjects.value;
  }
  return allProjects.value.filter(project => project.category === activeFilter.value);
});

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

/* 1. Hero Section */
/* 2. Portfolio Gallery */
.btn-filter {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--secondary-dark-grey);
  background-color: transparent;
  border: 1px solid #dee2e6;
  margin: 0 var(--spacing-xs);
  transition: var(--transition-default);
}
.btn-filter:hover {
  color: var(--color-primary);
  background-color: #f8f9fa;
}
.btn-filter.active {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border-color: var(--color-primary);
}

.portfolio-card {
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition-default);
}
.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--primary-shadow);
}
.badge-bg-primary-badge {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  font-weight: 500;
}
.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
  text-decoration: none;
  padding: 0.375rem 0.75rem;
}
.btn-brand-primary:hover {
  background-color: color-mix(in srgb, var(--color-primary), black 20%);
  border-color: color-mix(in srgb, var(--color-primary), black 20%);;
}

/* 3. Client Logo Wall */
.bg-light {
  background-color: #f8f9fa;
}

/* 4. CTA Section */
.cta-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-secondary);
  color: var(--color-primary);
}
.cta-section .btn-brand-primary:hover {
  background-color: var(--color-text-light);
  color: var(--color-primary);
  border-color: var(--color-primary);
}
</style>