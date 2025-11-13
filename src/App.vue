<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import CookieBanner from '@/components/CookieBanner.vue';
</script>

<template>
  <Navbar />
  
  <main>
    <RouterView />
  </main>

  <Footer />
  <CookieBanner />
</template>

<style>
/* body {
  padding-top: 70px; 
} */
</style>
