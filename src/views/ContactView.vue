<template>
  <div class="contact-view">
    <PageHeader 
      :title="t('contact.hero.title')"
      :subtitle="t('contact.hero.subtitle')"
      backgroundImage="/images/contactview-header.png" 
    />

    <section class="page-section">
      <div class="container">
        <div class="row">
          
          <div class="col-lg-7" data-aos="fade-right">
            <h2 class="section-heading mb-4">{{ t('contact.form.title') }}</h2>

            <form 
              name="contact" 
              @submit.prevent="handleSubmit"
            >
              <div class="mb-3">
                <label for="name" class="form-label">{{ t('contact.form.name') }}</label>
                <input v-model="formData.name" type="text" class="form-control" id="name" name="name" required :disabled="isSubmitting">
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">{{ t('contact.form.email') }}</label>
                <input v-model="formData.email" type="email" class="form-control" id="email" name="email" required :disabled="isSubmitting">
              </div>

              <div class="mb-3">
                <label for="subject" class="form-label">{{ t('contact.form.subject') }}</label>
                <input v-model="formData.subject" type="text" class="form-control" id="subject" name="subject" :disabled="isSubmitting">
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">{{ t('contact.form.message') }}</label>
                <textarea v-model="formData.message" class="form-control" id="message" name="message" rows="5" required :disabled="isSubmitting"></textarea>
              </div>

              <button type="submit" class="btn btn-brand-primary btn-lg" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                {{ isSubmitting ? t('contact.form.sending') : t('contact.form.button') }}
              </button>
            </form>
            
            <div v-if="formMessage" class="alert mt-4" :class="formError ? 'alert-danger' : 'alert-success'">
              {{ formMessage }}
            </div>
          </div>
          <div class="col-lg-5" data-aos="fade-left" data-aos-delay="100">
            <h2 class="section-heading mb-4">{{ t('contact.info.title') }}</h2>
            
            <ul class="list-unstyled contact-info-list">
              <li>
                <i class="fas fa-phone fa-fw"></i>
                <a href="tel:540-746-5700">(540) 746-5700</a>
              </li>
              <li>
                <i class="fas fa-envelope fa-fw"></i>
                <a href="mailto:info@casatechllc.com">info@casatechllc.com</a>
              </li>
              <li>
                <i class="fas fa-map-marker-alt fa-fw"></i>
                <span>{{ t('contact.info.area') }}<br>New Haven, CT & Harrisonburg, VA</span>
              </li>
            </ul>

            <h4 class="social-heading mt-5">{{ t('contact.info.social') }}</h4>
            <div class="social-icons-contact">
              <a href="https://www.linkedin.com/in/alex-martinez1711" target="_blank" class="social-icon me-3" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/aamartinez17" target="_blank" class="social-icon me-3" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// === UPDATED SCRIPT SETUP ===
import { onMounted, ref, reactive } from 'vue'; // 1. Import reactive
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import PageHeader from '@/components/PageHeader.vue';
import { useRouter } from 'vue-router'; // 2. Import useRouter

const { t } = useI18n();
const router = useRouter(); // 3. Get the router instance

// 4. Set up reactive state for the form
const isSubmitting = ref(false);
const formError = ref(false);
const formMessage = ref('');
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// 5. Create the new submit handler function
const handleSubmit = async () => {
  isSubmitting.value = true;
  formError.value = false;
  formMessage.value = '';

  try {
    const response = await fetch('/.netlify/functions/send-emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // It worked! Redirect to the thank-you page.
      router.push('/thank-you');
    } else {
      // The function had a server-side error
      throw new Error('Server error, please try again later.');
    }
  } catch (error) {
    // A network error or the function error
    formError.value = true;
    formMessage.value = 'An error occurred. Please try again later.';
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
// === END OF UPDATED SCRIPT ===
</script>

<style scoped>
/* === YOUR EXISTING STYLES (UNCHANGED) === */
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

/* 2. Main Contact Section */

/* Form Styles */
.form-label {
  font-weight: 600;
  color: var(--color-text-dark);
}
.form-control {
  padding: 0.75rem;
  font-size: 1rem;
}
.form-control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 0.25rem rgba(var(--color-primary-rgb), 0.25);
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

/* Info List Styles */
.contact-info-list {
  font-size: 1.1rem;
  line-height: 1.8;
}
.contact-info-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
}
.contact-info-list i {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-top: 5px;
  width: 40px; /* Aligns text */
}
.contact-info-list a,
.contact-info-list span {
  color: var(--secondary-dark-grey);
  text-decoration: none;
  font-weight: 500;
}
.contact-info-list a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Social Media */
.social-heading {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-text-dark);
  font-size: 1.25rem;
}
.social-icons-contact .social-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  transition: var(--transition-default);
}
.social-icons-contact .social-icon:hover {
  color: var(--color-secondary);
  transform: scale(1.1);
}
</style>