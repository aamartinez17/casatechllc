<template>
  <div class="blog-detail-view" v-if="post">
    <!-- 1. Post Header with Image -->
    <section class="post-header text-white text-center" :style="{ backgroundImage: `url(${post.imageLink})` }">
      <div class="header-overlay">
        <div class="container" data-aos="fade-in">
          <h1 class="display-4 fw-bold">{{ locale === 'es' ? post.title_es : post.title_en }}</h1>
          <p class="lead">{{ locale === 'es' ? post.subtitle_es : post.subtitle_en }}</p>
          <p class="text-muted"><small>{{ t('blog.postedOn') }} {{ formatDate(post.date) }}</small></p>
        </div>
      </div>
    </section>

    <!-- 2. Post Content -->
    <section class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- v-html is used to render the HTML from our BlogData.js -->
            <div class="post-body" v-html="locale === 'es' ? post.body_es : post.body_en"></div>

            <!-- References -->
            <div v-if="post.links && post.links.length > 0" class="mt-5">
              <h4 class="reference-title">{{ t('blog.references') }}</h4>
              <ul class="list-unstyled">
                <li v-for="link in post.links" :key="link.url">
                  <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            
            <hr class="my-5">
            
            <!-- Back to Blog Button -->
            <router-link to="/blog" class="btn btn-brand-primary">&larr; {{ t('blog.back') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="page-section text-center">
    <p>{{ t('blog.loading') }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'; // We don't even need 'computed' or 'watch'
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { allPosts } from '@/assets/data/BlogData.js';
// import { useMeta } from 'vue-meta'
import { useHead } from '@unhead/vue';

const { t, locale } = useI18n();
const route = useRoute();
// const post = ref(null);

const post = computed(() => {
  const slug = route.params.slug;
  return allPosts.find(p => p.slug === slug);
});

// Find the post based on the URL slug (This is correct)
onMounted(() => {
  // const slug = route.params.slug;
  // post.value = allPosts.find(p => p.slug === slug);
  window.scrollTo(0, 0);
});

// Utility Function (This is correct)
const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    timeZone: 'UTC'
  };
  return new Date(dateString).toLocaleDateString(locale.value, options);
};


// === THE "GETTER FUNCTION" PATTERN ===

// 1. Call useMeta with an ARROW FUNCTION.
// This function will now be re-run by vue-meta whenever
// 'post.value' or 'locale.value' changes.
// useMeta(() => {
useHead(() => {

  // 2. Check if the post is loaded. If not, return default tags.
  // This is the safety check that prevents the crash.
  if (!post.value) {
    return {
      title: 'Casatech Blog',
      meta: [
        { name: 'description', content: 'Tech tips from Casatech LLC' },
        { property: 'og:title', content: 'Casatech Blog' },
        { property: 'og:description', content: 'Tech tips from Casatech LLC' },
        { property: 'og:image', content: 'https://casatechllc.com/images/blogview-header.png' }
      ]
    };
  }

  // 3. If the post *is* loaded, build all the dynamic tags
  const title = locale.value === 'es' ? post.value.title_es : post.value.title_en;
  const description = locale.value === 'es' ? post.value.subtitle_es : post.value.subtitle_en;
  const image = `https://casatechllc.com${post.value.imageLink}`;
//   const url = `https://casatechllc.com${window.location.pathname}`; // Safest way
  const url = `https://casatechllc.com${route.fullPath}`;

  return {
    title: title, // Sets the <title> tag
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      // Twitter
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  };
});
</script>

<style scoped>
@import '@/assets/_variables.css';

.page-section {
  padding: var(--spacing-xl) 0;
}

/* Post Header */
.post-header {
  background-size: cover;
  background-position: center center;
  position: relative;
}
.header-overlay {
  /* background-color: rgba(3, 98, 100, 0.85); */
  background-color: rgba(var(--color-primary-rgb), 0.85);
  padding: calc(var(--spacing-top) + var(--spacing-xl)) 0 var(--spacing-xl);
}
.post-header .lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 800px;
  margin: 0 auto;
}
.post-header .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

/* Post Body */
.post-body {
  font-size: 1.1rem;
  line-height: var(--line-height-base);
}
/* This styling will apply to the v-html content */
.post-body :deep(h5) {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}
.post-body :deep(p) {
  margin-bottom: var(--spacing-md);
}
.post-body :deep(ul) {
  padding-left: 2rem;
  margin-bottom: var(--spacing-md);
}
.post-body :deep(li) {
  margin-bottom: var(--spacing-xs);
}
.post-body :deep(strong) {
  font-weight: 700;
  color: var(--color-text-dark);
}
.post-body :deep(code) {
  background-color: #e9ecef;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: monospace;
}

.reference-title {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
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
  color: var(--color-text-light);
}
</style>