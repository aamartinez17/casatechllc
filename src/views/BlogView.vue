<template>
  <div class="blog-view">
    <!-- 1. Hero Section -->
    <PageHeader 
      :title="t('blog.hero.title')"
      :subtitle="t('blog.hero.subtitle')"
      backgroundImage="/images/blogview-header.png" 
    />

    <!-- 2. Main Content -->
    <section class="page-section">
      <div class="container">
        <div class="row">
          
          <!-- Blog Posts Column (8) -->
          <div class="col-lg-8">
            <div v-for="post in paginatedPosts" :key="post.id" class="card blog-post-card mb-4" data-aos="fade-up">
              <img :src="post.imageLink" class="card-img-top" :alt="locale === 'es' ? post.title_es : post.title_en">
              <div class="card-body">
                <h2 class="card-title">{{ locale === 'es' ? post.title_es : post.title_en }}</h2>
                <p class="text-muted">{{ formatDate(post.date) }}</p>
                <p class="card-text">{{ locale === 'es' ? post.subtitle_es : post.subtitle_en }}</p>
                <router-link :to="`/blog/${post.slug}`" class="btn btn-brand-primary">
                  {{ t('blog.readMore') }}
                </router-link>
              </div>
            </div>

            <!-- Pagination Controls -->
            <nav class="pagination-nav mt-5" aria-label="Blog pagination">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                  <button class="page-link" @click="changePage(currentPage - 1)">{{ t('blog.previous') }}</button>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                  <button class="page-link" @click="changePage(currentPage + 1)">{{ t('blog.next') }}</button>
                </li>
              </ul>
              <p class="text-center text-muted">{{ t('blog.page') }} {{ currentPage }} {{ t('blog.of') }} {{ totalPages }}</p>
            </nav>
          </div>

          <!-- Sidebar Column (4) -->
          <div class="col-lg-4" data-aos="fade-left">
            <div class="sidebar-widget">
              <h4 class="widget-title">{{ t('blog.featured.title') }}</h4>
              <ul class="list-unstyled">
                <!-- We'll feature the 3 new articles here -->
                <li v-for="post in featuredPosts" :key="post.id" class="mb-3">
                  <router-link :to="`/blog/${post.slug}`" class="featured-link">
                    <span class="d-block fw-bold">{{ locale === 'es' ? post.title_es : post.title_en }}</span>
                    <span class="small text-muted">{{ formatDate(post.date) }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            
            <div class="sidebar-widget mt-4">
              <h4 class="widget-title">{{ t('blog.categories.title') }}</h4>
              <ul class="list-unstyled">
                <li><router-link to="/portfolio" class="featured-link">{{ t('blog.categories.web') }}</router-link></li>
                <li><router-link to="/services/startup-tech" class="featured-link">{{ t('blog.categories.smb') }}</router-link></li>
                <li><router-link to="/services" class="featured-link">{{ t('blog.categories.it') }}</router-link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import { allPosts } from '@/assets/data/BlogData.js';
import PageHeader from '@/components/PageHeader.vue';
import { usePageMeta } from '@/composables/usePageMeta.js';

const { t, locale } = useI18n();

const pageMeta = computed(() => ({
  title: t('blog.hero.title'),
  description: t('blog.hero.subtitle'),
  path: '/blog', // The base (English) path
  image: '/images/blogview-header.png' // The specific image for this page
}));

usePageMeta(pageMeta);

// --- Pagination Logic ---
// As you noted, we load all posts (which is fine for a small blog)
// but we only *render* the ones for the current page.
const allBlogPosts = ref(allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))); // Sort by date, newest first
const currentPage = ref(1);
const postsPerPage = ref(6); // Show 6 posts per page

const totalPages = computed(() => {
  return Math.ceil(allBlogPosts.value.length / postsPerPage.value);
});

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage.value;
  const end = start + postsPerPage.value;
  return allBlogPosts.value.slice(start, end);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo(0, 0); // Scroll to top on page change
  }
};

// --- Sidebar Logic ---
const featuredPosts = computed(() => {
  // Just show the 3 newest posts, which are the ones we created
  return allBlogPosts.value.slice(0, 4);
});

// --- Utility Functions ---
const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    timeZone: 'UTC' // <-- ADD THIS LINE
  };
  return new Date(dateString).toLocaleDateString(locale.value, options);
};


// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>

<style scoped>
@import '@/assets/_variables.css';

/* Hero */
/* Page */
.page-section {
  padding: var(--spacing-xl) 0;
}

/* Blog Card */
.blog-post-card {
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: var(--transition-default);
}
.blog-post-card:hover {
  box-shadow: var(--primary-shadow);
  transform: translateY(-5px);
}
.blog-post-card .card-title {
  font-family: var(--font-family-headings);
  font-weight: 700;
  color: var(--color-text-dark);
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

/* Pagination */
.pagination .page-link {
  color: var(--color-primary);
  font-weight: 600;
}
.pagination .page-item.disabled .page-link {
  color: #6c757d;
  background-color: #e9ecef;
}
.pagination .page-item.active .page-link {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-text-light);
}

/* Sidebar */
.sidebar-widget {
  background-color: #f8f9fa;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
}
.widget-title {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-secondary);
  padding-bottom: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}
.featured-link {
  text-decoration: none;
  color: var(--color-text-dark);
  transition: var(--transition-default);
}
.featured-link:hover {
  color: var(--color-primary);
}
.featured-link .small {
  color: var(--secondary-dark-grey);
}
</style>