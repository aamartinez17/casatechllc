import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

/**
 * A composable to set all page meta tags dynamically and bilingually.
 * @param {import('vue').ComputedRef<object>} pageData - A computed ref that returns an object 
 * with { title, description, path, [image] }.
 */
export function usePageMeta(pageData) {
  const { locale } = useI18n();
  const route = useRoute();

  // This is the "getter function" pattern we implemented before.
  // It automatically watches for 'pageData' or 'locale' to change.
  useHead(() => {
    
    // Get the dynamic, translated data from the page component
    const data = pageData.value;

    // Safety check if data isn't ready
    if (!data) {
      return { title: 'Loading... | Casatech LLC' };
    }

    // --- Build all the dynamic values ---
    const isSpanish = locale.value === 'es';
    const baseUrl = 'https://casatechllc.com';

    // Set URLs
    const enUrl = `${baseUrl}${data.path}`;
    const esUrl = `${baseUrl}/es${data.path}`;
    const canonicalUrl = isSpanish ? esUrl : enUrl;

    // Set default OG image if a page-specific one isn't provided
    const ogImage = data.image ? `${baseUrl}${data.image}` : `${baseUrl}/images/casatechllc-og-image.png`;

    return {
      title: data.title,
      htmlAttrs: {
        lang: isSpanish ? 'es' : 'en'
      },
      meta: [
        { name: 'description', content: data.description },
        // Open Graph
        { property: 'og:title', content: data.title },
        { property: 'og:description', content: data.description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:type', content: 'website' },
        { 
          id: 'og-locale-tag', // Target the ID to override index.html
          property: 'og:locale', 
          content: isSpanish ? 'es_MX' : 'en_US' 
        },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: data.title },
        { name: 'twitter:description', content: data.description },
        { name: 'twitter:image', content: ogImage }
      ],
      link: [
        { 
          id: 'canonical-link', // Target the ID to override index.html
          rel: 'canonical', 
          href: canonicalUrl 
        },
        // hreflang links
        { rel: 'alternate', hreflang: 'en', href: enUrl },
        { rel: 'alternate', hreflang: 'es', href: esUrl },
        { rel: 'alternate', hreflang: 'x-default', href: enUrl }
      ]
    };
  });
}