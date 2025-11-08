<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />
  
  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<style>
/* body {
  padding-top: 70px; 
} */
</style>
