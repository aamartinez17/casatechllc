<template>
  <div class="logo-scroller" data-animated="true">
    <div class="logo-track">
      <div class="logo-slide" v-for="logo in logos" :key="logo.id">
        <img :src="logo.logoUrl" :alt="logo.name" class="client-logo">
      </div>
      <div class="logo-slide" v-for="logo in logos" :key="`${logo.id}-clone`" aria-hidden="true">
        <img :src="logo.logoUrl" :alt="logo.name" class="client-logo">
      </div>
    </div>
  </div>
</template>

<script setup>
// We no longer need Swiper!
// We just need to get the logos from the parent.
defineProps({
  logos: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
@import '@/assets/_variables.css';

.logo-scroller {
  /* Hides the overflowing logos */
  overflow: hidden;
  /* Creates a fade-out effect on the left and right edges */
  mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
}

.logo-track {
  display: flex;
  width: max-content; /* Makes the track as wide as its content */
  align-items: center;
  
  /* This is the animation! */
  animation: scroll 40s linear infinite;
}

/* Pause the animation on hover (and on touch-hold) */
.logo-scroller:hover .logo-track,
.logo-scroller:active .logo-track {
  animation-play-state: paused;
}

@keyframes scroll {
  /* We move the track from its start (0) to the left
    by exactly 50% of its total width. Since the track
    is 2x the logos, this moves it one full "set" of logos,
    creating a perfect, seamless loop.
  */
  to {
    transform: translateX(-50%);
  }
}

.logo-slide {
  /* Adds space between logos */
  padding: 0 var(--spacing-xl);
}

/* Your original logo styles (unchanged) */
.client-logo {
  max-height: 60px;
  width: auto;
  max-width: 150px;
  filter: grayscale(100%) opacity(0.6);
  transition: var(--transition-default);
  cursor: grab;
}
.client-logo:hover {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.1);
}
</style>