<template>
  <section class="page-header" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="header-overlay">
      <div class="container text-center" data-aos="fade-in">
        <h1 class="display-3 fw-bold">{{ title }}</h1>
        <p v-if="subtitle" class="lead my-4">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';

// Define the props this component accepts
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false,
    default: ''
  },
  backgroundImage: {
    type: String,
    required: true
  }
});

// Initialize AOS when the component mounts
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>

<style scoped>
@import '@/assets/_variables.css';

.page-header {
  position: relative;
  background-size: cover;
  background-position: center center;
  color: var(--color-text-light);
  height: 40vh;
  
  /* ADD THIS: 
     This is your fallback color. If the image fails to load,
     or if you pass an empty string, this solid color 
     will show BEHIND the overlay.
  */
  background-color: var(--color-primary); 
}

.header-overlay {
  height: 100%; /* Make overlay fill the 40vh parent */
  width: 100%;
  display: flex; /* Use flexbox for centering */
  flex-direction: column; /* Stack children vertically (if you had more) */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */

  /* This is your "filter" - it will show over the image OR the fallback color */
  /* background-color: rgba(3, 98, 100, 0.30); */
  background-color: rgba(0, 0, 0, 0.50);
  /* background-color: rgba(255, 255, 255, 0.30); */
}

.page-header .lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
}
</style>