<template>
  <div class="about-view">
    <PageHeader 
      :title="t('about.hero.title')"
      :subtitle="t('about.hero.subtitle')"
      backgroundImage="/images/aboutview-header.png" 
    />

    <section class="page-section" id="story">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5" data-aos="fade-right">
            <img src="/images/aboutview-story.png" class="img-fluid shadow-lg" alt="Alex Martinez, Founder of Casatech LLC">
            </div>
          <div class="pt-5 col-lg-7" data-aos="fade-left" data-aos-delay="100">
            <span class="badge-espanol">{{ t('about.story.badge') }}</span>
            <h2 class="section-heading mt-3">{{ t('about.story.title') }}</h2>
            <h4 class="text-muted fw-light">{{ t('about.story.subtitle') }}</h4>
            <p class="lead">{{ t('about.story.p1') }}</p>
            <p>{{ t('about.story.p2') }}</p>
            <p>{{ t('about.story.p3') }}</p>
            <div class="social-links-about mt-4">
              <a href="https://www.linkedin.com/in/alex-martinez1711" target="_blank" class="social-icon-about me-3" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i> {{ t('about.story.linkedin') }}
              </a>
              <a href="https://github.com/aamartinez17" target="_blank" class="social-icon-about" aria-label="GitHub">
                <i class="fab fa-github"></i> {{ t('about.story.github') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section philosophy-section" id="philosophy">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('about.philosophy.title') }}</h2>
          <p class="text-muted mb-5">{{ t('about.philosophy.subtitle') }}</p>
        </div>
        <div class="row text-center">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body p-4">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-users fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">{{ t('about.philosophy.card1.title') }}</h4>
                <p class="text-muted">{{ t('about.philosophy.card1.desc') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body p-4">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-laptop-code fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">{{ t('about.philosophy.card2.title') }}</h4>
                <p class="text-muted">{{ t('about.philosophy.card2.desc') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body p-4">
                <span class="fa-stack fa-4x mb-4">
                  <i class="fas fa-circle fa-stack-2x text-primary-icon"></i>
                  <i class="fas fa-handshake-angle fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">{{ t('about.philosophy.card3.title') }}</h4>
                <p class="text-muted">{{ t('about.philosophy.card3.desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" id="skills">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h2 class="section-heading">{{ t('about.skills.title') }}</h2>
          <p class="text-muted mb-5">{{ t('about.skills.subtitle') }}</p>
        </div>
        
        <div class="mb-4" data-aos="fade-up">
          <h5 class="skill-category">{{ t('about.skills.cat1') }}</h5>
          <span class="skill-badge">Vue.js</span>
          <span class="skill-badge">JavaScript</span>
          <span class="skill-badge">Node.js</span>
          <span class="skill-badge">HTML5</span>
          <span class="skill-badge">CSS3</span>
          <span class="skill-badge">Bootstrap</span>
          <span class="skill-badge">PHP</span>
        </div>
        
        <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
          <h5 class="skill-category">{{ t('about.skills.cat2') }}</h5>
          <span class="skill-badge">SQL</span>
          <span class="skill-badge">MySQL</span>
          <span class="skill-badge">MS SQL Server</span>
          <span class="skill-badge">MongoDB</span>
        </div>

        <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
          <h5 class="skill-category">{{ t('about.skills.cat3') }}</h5>
          <span class="skill-badge">Java</span>
          <span class="skill-badge">Python</span>
          <span class="skill-badge">C++</span>
          <span class="skill-badge">VB.NET</span>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h5 class="skill-category">{{ t('about.skills.cat4') }}</h5>
          <span class="skill-badge">Git & GitHub</span>
          <span class="skill-badge">REST APIs</span>
          <span class="skill-badge">Agile Methodologies</span>
          <span class="skill-badge">Jira & Trello</span>
          <span class="skill-badge">Jamf</span>
        </div>
      </div>
    </section>

    <section class="page-section philosophy-section" id="credentials">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" data-aos="fade-right">
            <h3 class="section-heading-sm mb-4">{{ t('about.experience.title') }}</h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <strong>{{ t('about.experience.job1') }}</strong>
                <span class="text-muted d-block">{{ t('about.experience.job1comp') }}</span>
              </li>
              <li class="mb-3">
                <strong>{{ t('about.experience.job2') }}</strong>
                <span class="text-muted d-block">{{ t('about.experience.job2comp') }}</span>
              </li>
              <li class="mb-3">
                <strong>{{ t('about.experience.job3') }}</strong>
                <span class="text-muted d-block">{{ t('about.experience.job3comp') }}</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h3 class="section-heading-sm mb-4">{{ t('about.education.title') }}</h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <strong>{{ t('about.education.deg1') }}</strong>
                <span class="text-muted d-block">{{ t('about.education.deg1school') }}</span>
              </li>
              <li class="mb-3">
                <strong>{{ t('about.education.deg2') }}</strong>
                <span class="text-muted d-block">{{ t('about.education.deg2school') }}</span>
              </li>
              <li class="mb-3">
                <strong>{{ t('about.education.cert1') }}</strong>
                <span class="text-muted d-block">{{ t('about.education.cert1issuer') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container text-center" data-aos="fade-up">
        <h2 class="display-5 fw-bold">{{ t('about.cta.title') }}</h2>
        <p class="lead my-4">{{ t('about.cta.subtitle') }}</p>
        <router-link to="/contact" class="btn btn-brand-primary btn-lg px-5 py-3">{{ t('about.cta.button') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import PageHeader from '@/components/PageHeader.vue';
// Note: 'aos/dist/aos.css' is already imported in HomeView.vue
// If App.vue imports both, it might be better to import it once in main.js or App.vue

const { t } = useI18n();

// Initialize AOS on component mount
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

/* 2. Story Section */
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
.social-links-about .social-icon-about {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: var(--transition-default);
}
.social-links-about .social-icon-about:hover {
  color: var(--color-text-dark);
  text-decoration: underline;
}
.social-links-about i {
  font-size: 1.5rem;
  margin-right: 8px;
}

/* 3. Philosophy Section */
.philosophy-section {
  background-color: #f8f9fa; /* Light grey background */
}
.philosophy-section .card {
  border: none;
  transition: var(--transition-default);
}
.philosophy-section .card:hover {
  transform: translateY(-10px);
  box-shadow: var(--primary-shadow);
}
.text-primary-icon {
  color: var(--color-primary);
}

/* 4. Skills Section */
.skill-category {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}
.skill-badge {
  display: inline-block;
  background-color: #e9ecef;
  color: var(--secondary-dark-grey);
  padding: 0.5em 1em;
  margin: 0.25em;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
}

/* 6. CTA Section */
.cta-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-secondary);
  color: var(--color-primary);
}
.btn-brand-primary { /* Copied from HomeView for consistency */
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