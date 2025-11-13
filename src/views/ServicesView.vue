<template>
  <div class="services-view">
    <PageHeader 
      :title="t('services.hero.title')"
      :subtitle="t('services.hero.subtitle')"
      backgroundImage="/images/servicesview-header.png" 
    />

    <section class="page-section" id="web-design">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="/images/servicesview-web-development.png" class="img-fluid rounded-3 shadow-lg" alt="Modern Website Design">
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 class="section-heading">{{ t('services.web.title') }}</h2>
            <p class="lead">{{ t('services.web.p1') }}</p>
            <h5 class="mt-4 mb-3 fw-bold">{{ t('services.web.subtitle') }}</h5>
            <ul class="service-checklist">
              <li><i class="fas fa-check-circle"></i>{{ t('services.web.li1') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.web.li2') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.web.li3') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.web.li4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-light" id="smb-tech">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2 class="section-heading">{{ t('services.smb.title') }}</h2>
            <p class="lead">{{ t('services.smb.p1') }}</p>
            <h5 class="mt-4 mb-3 fw-bold">{{ t('services.smb.subtitle') }}</h5>
            <ul class="service-checklist">
              <li><i class="fas fa-check-circle"></i>{{ t('services.smb.li1') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.smb.li2') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.smb.li3') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.smb.li4') }}</li>
            </ul>
            
            <router-link to="/services/startup-tech" class="btn btn-brand-primary mt-3">
              {{ t('services.smb.learnMore') }}
            </router-link>
            </div>
          <div class="pt-5 col-lg-6" data-aos="fade-left">
            <img src="/images/servicesview-business-tech.png" class="img-fluid rounded-3 shadow-lg" alt="Small Business Tech Stack">
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="it-services">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="/images/servicesview-it.png" class="img-fluid rounded-3 shadow-lg" alt="IT Services and Support">
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 class="section-heading">{{ t('services.it.title') }}</h2>
            <p class="lead">{{ t('services.it.p1') }}</p>
            <h5 class="mt-4 mb-3 fw-bold">{{ t('services.it.subtitle') }}</h5>
            <ul class="service-checklist">
              <li><i class="fas fa-check-circle"></i>{{ t('services.it.li1') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.it.li2') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.it.li3') }}</li>
              <li><i class="fas fa-check-circle"></i>{{ t('services.it.li4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section pricing-section bg-light" id="pricing">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('services.pricing.title') }}</h2>
          <p class="text-muted lead mb-5">{{ t('services.pricing.subtitle') }}</p>
        </div>
        <div class="row">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 shadow-sm text-center p-4">
              <div class="icon-wrapper">
                <i class="fas fa-box"></i>
              </div>
              <h4 class="mt-3">{{ t('services.pricing.card1.title') }}</h4>
              <p class="text-muted">{{ t('services.pricing.card1.desc') }}</p>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 shadow-sm text-center p-4">
              <div class="icon-wrapper">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <h4 class="mt-3">{{ t('services.pricing.card2.title') }}</h4>
              <p class="text-muted">{{ t('services.pricing.card2.desc') }}</p>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm text-center p-4">
              <div class="icon-wrapper">
                <i class="fas fa-clock"></i>
              </div>
              <h4 class="mt-3">{{ t('services.pricing.card3.title') }}</h4>
              <p class="text-muted">{{ t('services.pricing.card3.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-5" data-aos="fade-up">
          <p class="lead">{{ t('services.pricing.cta') }}</p>
          <router-link to="/contact" class="btn btn-brand-primary btn-lg">{{ t('services.pricing.button') }}</router-link>
        </div>
      </div>
    </section>

    <!-- === NEW SECTION (5) === -->
    <section class="page-section bg-light" id="further-reading">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('startup.reading.title', ['@']) }}</h2>
          <p class="text-muted lead mb-5">{{ t('startup.reading.subtitle', ['@']) }}</p>
        </div>
        <div class="row">
          <!-- Link to Article 1 -->
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card blog-link-card h-100">
              <div class="card-body">
                <h5 class="card-title">{{ t('blog.article1.title') }}</h5>
                <p class="card-text text-muted">{{ t('blog.article1.subtitle', ['@']) }}</p>
                <router-link to="/blog/5-tech-essentials-for-your-startup" class="btn btn-link p-0">
                  {{ t('blog.readMore') }} &rarr;
                </router-link>
              </div>
            </div>
          </div>
          <!-- Link to Article 2 -->
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card blog-link-card h-100">
              <div class="card-body">
                <h5 class="card-title">{{ t('blog.article2.title') }}</h5>
                <p class="card-text text-muted">{{ t('blog.article2.subtitle') }}</p>
                <router-link to="/blog/what-is-voip-for-business" class="btn btn-link p-0">
                  {{ t('blog.readMore') }} &rarr;
                </router-link>
              </div>
            </div>
          </div>
          <!-- Link to Article 3 -->
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card blog-link-card h-100">
              <div class="card-body">
                <h5 class="card-title">{{ t('blog.article3.title') }}</h5>
                <p class="card-text text-muted">{{ t('blog.article3.subtitle') }}</p>
                <router-link to="/blog/google-workspace-vs-gmail" class="btn btn-link p-0">
                  {{ t('blog.readMore') }} &rarr;
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container text-center" data-aos="fade-up">
        <h2 class="display-5 fw-bold">{{ t('services.cta.title') }}</h2>
        <p class="lead my-4">{{ t('services.cta.subtitle') }}</p>
        <router-link to="/contact" class="btn btn-brand-primary btn-lg px-5 py-3">{{ t('services.cta.button') }}</router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import PageHeader from '@/components/PageHeader.vue';
import { usePageMeta } from '@/composables/usePageMeta.js';

const { t } = useI18n();

const pageMeta = computed(() => ({
  title: t('services.hero.title'),
  description: t('services.hero.subtitle'),
  path: '/services',
  image: '/images/servicesview-header.png',
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
/* 2-4. Service Sections */
.service-checklist {
  list-style: none;
  padding-left: 0;
}
.service-checklist li {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
}
.service-checklist .fa-check-circle {
  color: var(--color-primary);
  margin-right: var(--spacing-md);
  font-size: 1.25rem;
}

/* 5. Pricing Section */
.pricing-section .card {
  border: none;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
}
.pricing-section .card:hover {
  transform: translateY(-10px);
  box-shadow: var(--primary-shadow);
}
.pricing-section .icon-wrapper {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-text-light);
  font-size: 2rem;
  margin: 0 auto var(--spacing-md);
}
.pricing-section .card h4 {
  font-family: var(--font-family-headings);
  color: var(--color-primary);
  font-weight: 600;
}
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

/* === NEW STYLES FOR SECTION 5 === */
.blog-link-card {
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition-default);
}
.blog-link-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--primary-shadow);
}
.blog-link-card .card-title {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
}
.blog-link-card .btn-link {
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}
.blog-link-card .btn-link:hover {
  text-decoration: underline;
}

/* 6. CTA Section */
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