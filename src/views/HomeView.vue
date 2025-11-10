<template>
  <div class="home-view">
    <section class="hero-section text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7" data-aos="fade-right">
            <h1 class="display-3 fw-bold">{{ t('home.hero.title') }}</h1>
            <p class="lead my-4">{{ t('home.hero.subtitle') }}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <router-link to="/contact" class="btn btn-brand-secondary btn-lg px-4 me-md-2">{{ t('home.hero.ctaContact') }}</router-link>
              <router-link to="/services" class="btn btn-outline-light btn-lg px-4">{{ t('home.hero.ctaServices') }}</router-link>
            </div>
            <div class="mt-4">
              <a href="#" @click.prevent="toggleLocale" class="btn btn-accent btn-lg px-4 pulse-animation">
                {{ languageButtonText }} <i class="fas fa-comments ms-2"></i>
              </a>
            </div>
          </div>
          </div>
      </div>
    </section>

    <section class="page-section pricing-ad-section bg-light">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-10 col-xl-8 mx-auto">
            <div class="card pricing-ad-card shadow-lg border-0">
              <div class="card-body p-4 p-md-5">
                <h2 class="pricing-ad-title">{{ t('home.pricing.title') }}</h2>
                <p class="lead text-muted mb-4">{{ t('home.pricing.subtitle') }}</p>

                <div class="price-display mb-4">
                  <span class="price-old">{{ t('home.pricing.oldPrice') }}</span>
                  <span class="price-new">{{ t('home.pricing.newPrice') }}</span>
                </div>

                <ul class="list-unstyled feature-list text-start w-75 mx-auto">
                  <li>
                    <i class="fas fa-check-circle"></i>
                    <span>{{ t('home.pricing.point1') }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>
                    <span>{{ t('home.pricing.point2') }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>
                    <span>{{ t('home.pricing.point3') }}</span>
                  </li>
                </ul>

                <router-link to="/contact" class="btn btn-brand-secondary btn-lg px-5 mt-4">
                  {{ t('home.pricing.cta') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section class="page-section services-section bg-light py-5" id="services">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('home.services.title') }}</h2>
          <p class="text-muted mb-5">{{ t('home.services.subtitle') }}</p>
        </div>
        <div class="row text-center">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-laptop-code fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">{{ t('home.services.card1.title') }}</h4>
                <p class="text-muted">{{ t('home.services.card1.desc') }}</p>
                <router-link to="/services" class="btn btn-link">{{ t('home.services.learnMore') }}</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-briefcase fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">{{ t('home.services.card2.title') }}</h4>
                <p class="text-muted">{{ t('home.services.card2.desc') }}</p>
                <router-link to="/services" class="btn btn-link">{{ t('home.services.learnMore') }}</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-headset fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">{{ t('home.services.card3.title') }}</h4>
                <p class="text-muted">{{ t('home.services.card3.desc') }}</p>
                <router-link to="/services" class="btn btn-link">{{ t('home.services.learnMore') }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section py-5" id="client-logos">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('home.clients.title') }}</h2>
          <p class="text-muted lead mb-5">{{ t('home.clients.subtitle') }}</p>
        </div>
        <swiper
          :modules="swiperModules"
          :slides-per-view="2"
          :space-between="30"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '576': { slidesPerView: 3 },
            '768': { slidesPerView: 4 },
            '992': { slidesPerView: 5 }
          }"
          class="client-logo-swiper"
          data-aos="fade-up"
        >
          <swiper-slide v-for="logo in clientLogos" :key="logo.id">
            <div class="client-logo-wrapper">
              <img :src="logo.logoUrl" :alt="logo.name" class="client-logo">
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="page-section bg-light py-5" id="about-brief">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="/images/homeview-about-brief.png" class="img-fluid rounded-3 shadow" alt="Tech Consultant in New Haven">
          </div>
          <div class="pt-5 col-lg-6 ps-lg-5" data-aos="fade-left" data-aos-delay="100">
            <span class="badge-espanol">{{ t('home.about.badge') }}</span>
            <h2 class="section-heading mt-3">{{ t('home.about.title') }}</h2>
            <p class="text-muted">{{ t('home.about.p1') }}</p>
            <p class="text-muted">{{ t('home.about.p2') }}</p>
            <router-link to="/about" class="btn btn-brand-primary">{{ t('home.about.button') }}</router-link>
          </div>
        </div>
      </div>
    </section>

<section class="page-section portfolio-section my-5" id="portfolio">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('home.portfolio.title') }}</h2>
          <p class="text-muted mb-5">{{ t('home.portfolio.subtitle') }}</p>
        </div>
        
        <swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="30"
          :navigation="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            '768': { slidesPerView: 2 },
            '992': { slidesPerView: 3 }
          }"
          data-aos="zoom-in"
          class="pb-5"
        >
          <!-- Loop over the new homeProjects ref -->
          <swiper-slide v-for="project in homeProjects" :key="project.id">
            <div class="portfolio-item card h-100">
              <!-- Image is now clickable -->
              <img 
                :src="project.imageUrl" 
                class="card-img-top" 
                :alt="locale === 'es' ? project.title_es : project.title_en"
                @click="openModal(project.imageUrl)"
                style="cursor: zoom-in;"
              >
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ locale === 'es' ? project.title_es : project.title_en }}</h5>
                <p class="card-text text-muted">{{ locale === 'es' ? project.category_es : project.category_en }}</p>
                
                <!-- New "View Site" button -->
                <a 
                  v-if="project.projectUrl"
                  :href="project.projectUrl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-brand-primary mt-auto"
                >
                  {{ t('home.portfolio.viewWebsite') }} <i class="fas fa-external-link-alt ms-1"></i>
                </a>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- New "View All" button -->
        <div class="text-center" data-aos="fade-up">
          <router-link to="/portfolio" class="btn btn-brand-secondary btn-lg px-5">
            {{ t('home.portfolio.viewAll') }}
          </router-link>
        </div>
      </div>
    </section>


    <!-- === NEW: Image Lightbox Modal === -->
    <div v-if="selectedImage" class="lightbox-overlay" @click="closeModal">
      <div class="lightbox-content">
        <img :src="selectedImage" class="lightbox-image" alt="Portfolio project full view">
        <button class="lightbox-close" @click="closeModal">&times;</button>
      </div>
    </div>

    <section class="page-section blog-cta-section text-white text-center">
      <div class="container" data-aos="zoom-in">
        <h2 class="section-heading-white">{{ t('home.blogCta.title') }}</h2>
        <p class="lead my-4">{{ t('home.blogCta.subtitle') }}</p>

        <div class="article-preview mb-4">
          <h5 class="article-preview-title">{{ t('home.blogCta.featuredArticle') }}</h5>
          <blockquote class="article-preview-quote">
            "{{ seoArticleSubtitle }}"
          </blockquote>
        </div>
        <div class="mb-2">
          <router-link :to="seoArticleLink" class="btn btn-accent btn-lg px-5 me-3 mb-3">
            {{ t('home.blogCta.articleButton') }} <i class="fas fa-arrow-right ms-2"></i>
          </router-link>
          <router-link to="/blog" class="btn btn-outline-light btn-lg px-5 mb-3">
            {{ t('home.blogCta.blogButton') }} <i class="fas fa-book-open ms-2"></i>
          </router-link>
        </div>
      </div>
    </section>

    <section class="page-section bg-light py-5" id="faq">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('home.faq.title') }}</h2>
          <p class="text-muted lead mb-5">{{ t('home.faq.subtitle') }}</p>
        </div>
        <div class="row">
          <div class="col-lg-10 mx-auto" data-aos="fade-up">
            <div class="accordion" id="faqAccordion">
              <div v-for="(item, index) in faqs" :key="item.id" class="accordion-item">
                <h2 class="accordion-header" :id="`heading-${item.id}`">
                  <button 
                    class="accordion-button" 
                    :class="{ 'collapsed': index !== 0 }"
                    type="button" 
                    data-bs-toggle="collapse" 
                    :data-bs-target="`#collapse-${item.id}`" 
                    :aria-expanded="index === 0 ? 'true' : 'false'" 
                    :aria-controls="`collapse-${item.id}`">
                    {{ locale === 'es' ? item.q_es : item.q_en }}
                  </button>
                </h2>
                <div 
                  :id="`collapse-${item.id}`" 
                  class="accordion-collapse collapse"
                  :class="{ 'show': index === 0 }"
                  :aria-labelledby="`heading-${item.id}`" 
                  data-bs-parent="#faqAccordion">
                  <div class="accordion-body" v-html="locale === 'es' ? item.a_es : item.a_en">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container text-center" data-aos="fade-up">
        <h2 class="display-5 fw-bold">{{ t('home.cta.title') }}</h2>
        <p class="lead my-4">{{ t('home.cta.subtitle') }}</p>
        <router-link to="/contact" class="btn btn-brand-primary btn-lg px-5 py-3">{{ t('home.cta.button') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import NEW data
import { clientLogos as logoData } from '@/assets/data/PartnerData.js';
import { allFAQs as faqData } from '@/assets/data/FAQData.js';
import { allPosts as blogData } from '@/assets/data/BlogData.js';

// Get i18n functions
const { t, locale } = useI18n();

// Setup Swiper modules (add Autoplay for logos)
const swiperModules = [Navigation, Pagination, Autoplay];

// Setup NEW data refs
const clientLogos = ref(logoData);
const faqs = ref(faqData);


// === NEW: Logic for "Se Habla Español" button ===
const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'es' : 'en';
  locale.value = newLocale;
  localStorage.setItem('user-locale', newLocale);
};

const languageButtonText = computed(() => {
  return locale.value === 'en'
    ? t('home.hero.spanishButton') // Shows "Se Habla Español"
    : t('home.about.badge');       // Shows "We Speak English"
});

// --- UPDATED: Blog CTA Logic ---
const seoArticle = computed(() => {
  // Find the SEO post (we'll reuse this)
  return blogData.find(post => post.slug === 'seo-essentials-for-small-business');
});

const seoArticleLink = computed(() => {
  return seoArticle.value ? `/blog/${seoArticle.value.slug}` : '/blog';
});

// NEW: Get the subtitle in the correct language
const seoArticleSubtitle = computed(() => {
  if (!seoArticle.value) return '';
  return locale.value === 'es' 
    ? seoArticle.value.subtitle_es 
    : seoArticle.value.subtitle_en;
});

// === NEW: Modal (Lightbox) Logic ===
const selectedImage = ref(null);

const openModal = (imageUrl) => {
  selectedImage.value = imageUrl;
};

const closeModal = () => {
  selectedImage.value = null;
};

// Initialize AOS on component mount
onMounted(() => {
  const savedLocale = localStorage.getItem('user-locale');
  if (savedLocale) {
    locale.value = savedLocale;
  };

  AOS.init({
    duration: 800,
    once: true,
  });
});


const homeProjects = ref([
  {
    id: 1,
    title_en: 'Cardoso Cleaning Services LLC',
    title_es: 'Cardoso Cleaning Services LLC',
    category_en: 'Web Design for Local Business',
    category_es: 'Diseño Web para Negocio Local',
    imageUrl: '/images/project-cardoso-cs.png',
    projectUrl: 'https://cardosocleaningservicesllc.netlify.app/' // Example URL
  },
  {
    id: 2,
    title_en: 'White Glove Assembly Co',
    title_es: 'White Glove Assembly Co',
    category_en: 'Commercial Website',
    category_es: 'Sitio Web Comercial',
    imageUrl: '/images/project-whiteglove-assembly.png',
    projectUrl: 'https://www.whitegloveassembly.co' // Example URL
  },
  {
    id: 3,
    title_en: 'Omar\'s Barbershop and Hair Salon',
    title_es: 'Omar\'s Barbershop and Hair Salon',
    category_en: 'Web Design for Local Business',
    category_es: 'Diseño Web para Negocio Local',
    imageUrl: '/images/project-omars-bas.png',
    projectUrl: 'https://omarsbarbershop.netlify.app/'
  }
]);
</script>

<style scoped>
@import '@/assets/_variables.css';

/* 1. Hero Section (UPDATED) */
.hero-section {
  position: relative; /* Required for the overlay */
  
  /* === REPLACE THIS WITH YOUR IMAGE === */
  background-image: url('/images/homeview-header.png');
  
  background-size: cover;
  /* This is key: it keeps the right side of the image in focus */
  background-position: center right; 
  
  padding: var(--spacing-xl) 0; 
  min-height: 80vh;
  display: flex;
  align-items: center;
}

/* This is the new overlay to make text readable */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  /* Gradient: Darker on the left (behind text)
     fading to lighter on the right (where your image is) */
  /* background: linear-gradient(90deg, 
    rgba(3, 98, 100, 0.9) 0%, 
    rgba(3, 98, 100, 0.8) 50%, 
    rgba(3, 98, 100, 0.1) 100% 
  ); */

  background: linear-gradient(90deg, 
    rgba(var(--color-primary-rgb), 0.9) 0%,  /* 90% opaque primary color */
    rgba(var(--color-primary-rgb), 0.9) 0%,  /* 90% opaque primary color */
    rgba(0, 0, 0, 0.8) 50%, 
    rgba(0, 0, 0, 0.1) 100% /* 40% opaque */
  );
  z-index: 1; /* Sits behind the content */
}

/* This puts your text (the .container) on top of the overlay */
.hero-section .container {
  position: relative;
  z-index: 2;
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
  /* This padding is now correct because of the global body padding */
  padding: var(--spacing-xl) 0; 
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.hero-section .lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
}

/* Custom Buttons */
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
.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}
.btn-brand-primary:hover {
  background-color: color-mix(in srgb, var(--color-primary), black 20%);
  border-color: var(--color-primary);
  color: var(--color-text-light);
}

.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-text-light); /* Text color for the accent button */
  border: 1px solid var(--color-accent);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
  text-decoration: none; /* Ensure no underline */
}
.btn-accent:hover {
  background-color: color-mix(in srgb, var(--color-accent), black 20%);
  border-color: color-mix(in srgb, var(--color-accent), black 20%);
  color: var(--color-text-light);
}
/* Pulse animation for the button */
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb), 0.7); /* Accent color shadow */
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 171, 64, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 171, 64, 0);
  }
}
.pulse-animation {
  animation: pulse 2s infinite;
}

/* 2. Pricing Ad Section (NEW) */
.pricing-ad-section {
  padding: var(--spacing-xl) 0;
}
.pricing-ad-card {
  border-radius: var(--border-radius);
}
.pricing-ad-title {
  font-family: var(--font-family-headings);
  font-weight: 700;
  font-size: 2rem;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.price-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);
}
.price-old {
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--color-accent);
  text-decoration: line-through;
  text-decoration-thickness: 3px;
  opacity: 0.8;
}
.price-new {
  font-size: 5rem; /* Make it BIG */
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}
.feature-list {
  max-width: 350px;
}
.feature-list li {
  display: flex;
  align-items: flex-start;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-sm);
}
.feature-list .fa-check-circle {
  color: var(--color-accent); /* Accent color checkmark */
  font-size: 1.5rem;
  margin-right: var(--spacing-sm);
  margin-top: 3px;
}

/* 3. Services Section */
.services-section {
  background-color: #f8f9fa; /* Light grey background */
}
.services-section .card {
  border: none;
  transition: var(--transition-default);
}
.services-section .card:hover {
  transform: translateY(-10px);
  box-shadow: var(--primary-shadow);
}
.text-primary-icon {
  color: var(--color-primary);
}

/* 4. Client Logo Wall (NEW) */
.client-logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
.client-logo {
  max-height: 60px;
  width: auto;
  max-width: 150px;
  filter: grayscale(100%) opacity(0.6);
  transition: var(--transition-default);
}
.client-logo:hover {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.1);
}

/* 5. About Brief Section */
.badge-espanol {
  display: inline-block;
  padding: 0.5em 0.75em;
  font-size: 0.9rem;
  font-weight: var(--font-weight-bold);
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-radius: var(--border-radius);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 6. Portfolio Section */
.portfolio-item {
  /* Stronger shadow and border */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition-default);
}
.portfolio-item:hover {
  /* The "move" effect */
  transform: translateY(-8px);
  box-shadow: var(--primary-shadow);
}
.portfolio-item .card-img-top {
  /* Line between image and text */
  border-bottom: 1px solid #e9ecef;
}
.portfolio-item .card-title {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
}
/* Ensure swiper pagination doesn't get cut off */
.portfolio-section .swiper {
  padding-bottom: 40px;
}


/* === NEW: Lightbox Modal Styles === */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050; /* Above navbar */
  backdrop-filter: blur(5px);
  padding: 1rem;
}
.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}
.lightbox-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90vh; /* Prevents image from being too tall */
  border-radius: var(--border-radius);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}
.lightbox-close {
  position: absolute;
  top: -15px;
  right: -15px;
  background: var(--color-accent);
  color: var(--color-text-light);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 2rem;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  z-index: 1051;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}


/* === NEW: Blog CTA Section Styles === */
.blog-cta-section {
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), 
              linear-gradient(135deg, var(--color-primary), #132e5f);
  background-attachment: fixed;
  background-size: 60px 60px, cover;
  padding: var(--spacing-xl) 0;
}
.blog-cta-section .section-heading-white {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  font-size: 2.5rem;
}
.blog-cta-section .lead {
  color: rgba(255, 255, 255, 0.9);
}
.blog-cta-section .btn-accent {
  color: var(--color-text-light); /* Changed this to white for better contrast on accent bg */
}
.blog-cta-section .btn-accent:hover {
  color: var(--color-text-light);
}
.blog-cta-section .btn-outline-light {
  color: var(--color-text-light);
  border-color: var(--color-text-light);
}
.blog-cta-section .btn-outline-light:hover {
  background-color: var(--color-text-light);
  color: var(--color-primary);
}

/* === NEW: Article Preview Styles === */
.article-preview {
  max-width: 700px;
  margin: 0 auto;
  padding: var(--spacing-md);
  background: rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  border-left: 4px solid var(--color-accent);
}
.article-preview-title {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-secondary);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-sm);
}
.article-preview-quote {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--color-text-light);
  margin-bottom: 0;
}

/* 7. FAQ Section (NEW) */
.accordion-item {
  border: 1px solid #dee2e6;
  border-radius: 0;
  margin-bottom: var(--spacing-sm);
}
.accordion-header {
  border-radius: 0;
}
.accordion-button {
  font-family: var(--font-family-headings);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-text-dark);
}
.accordion-button:not(.collapsed) {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  box-shadow: none;
}
.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--color-primary-rgb), 0.25);
  border-color: transparent;
}
.accordion-body {
  font-size: 1rem;
  line-height: var(--line-height-base);
}
.accordion-body :deep(a) {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}
.accordion-body :deep(a:hover) {
  text-decoration: underline;
}

/* 8. Final CTA Section */
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