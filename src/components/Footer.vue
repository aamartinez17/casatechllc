<template>
  <footer class="footer-custom text-white pt-5 pb-4">
    <div class="container">
      <div class="row">
        
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <router-link to="/" class="footer-logo-link mb-3">
            <img src="/logos/casatech-logo-white-bg.png" alt="Casatech LLC logo" class="footer-logo">
          </router-link>
          
          <p class="footer-text">{{ t('footer.tagline') }}</p>
          <p class="fw-bold text-secondary">{{ t('footer.language') }}</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer-heading">{{ t('footer.links') }}</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/" class="footer-link">{{ t('nav.home') }}</router-link></li>
            <li class="mb-2"><router-link to="/about" class="footer-link">{{ t('nav.about') }}</router-link></li>
            <li class="mb-2"><router-link to="/services" class="footer-link">{{ t('nav.services') }}</router-link></li>
            <li class="mb-2"><router-link to="/portfolio" class="footer-link">{{ t('nav.portfolio') }}</router-link></li>
            <li class="mb-2"><router-link to="/contact" class="footer-link">{{ t('nav.blog') }}</router-link></li>
            <li class="mb-2"><router-link to="/contact" class="footer-link">{{ t('nav.contact') }}</router-link></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="footer-heading">{{ t('footer.contact') }}</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="fas fa-map-marker-alt me-2"></i>{{ t('footer.location') }}
            </li>
            <li class="mb-2">
              <a href="tel:540-746-5700" class="footer-link">
                <i class="fas fa-phone me-2"></i>(540) 746-5700
              </a>
            </li>
            <li class="mb-2">
              <a href="mailto:info@casatechllc.com" class="footer-link">
                <i class="fas fa-envelope me-2"></i>info@casatechllc.com
              </a>
            </li>
          </ul>
        </div>

        <!-- <div class="col-lg-3 col-md-6">
          <h5 class="footer-heading">{{ t('footer.follow') }}</h5>
          <div class="social-icons">
            <a href="#" class="social-icon me-3" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="social-icon me-3" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
        </div> -->
      </div>

      <hr class="footer-divider mt-4 mb-3">
      <div class="row">
        <div class="col-12 text-center">
          <p class="small mb-0">&copy; {{ new Date().getFullYear() }} Casatech LLC. {{ t('footer.rights') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
@import '@/assets/_variables.css';

.footer-custom {
  background-color: var(--color-primary);
}

.footer-heading {
  font-family: var(--font-family-headings);
  color: var(--color-secondary);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.footer-text {
  color: rgba(255, 255, 255, 0.85);
}

.footer-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: var(--transition-default);
}

.footer-link:hover {
  color: var(--color-text-light);
  text-decoration: underline;
}

/* Icon list for contact */
.list-unstyled li {
  color: rgba(255, 255, 255, 0.85);
}

.social-icon {
  font-size: 1.75rem;
  color: var(--color-text-light);
  transition: var(--transition-default);
}

.social-icon:hover {
  color: var(--color-secondary);
  transform: translateY(-2px);
}

.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.small {
  color: rgba(255, 255, 255, 0.7);
}

/* === NEW STYLES FOR FOOTER LOGO === */
.footer-logo-link {
  display: inline-block; /* Allows margin-bottom to work */
}

.footer-logo {
  max-height: 100px; /* A good size for the footer */
  width: auto;
  background-color: #ffffff; /* White background */
  border-radius: 8px; /* Rounded edges */
  padding: 4px; /* A little padding */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: var(--transition-default);
}

.footer-logo:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>