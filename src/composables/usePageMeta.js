import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export function usePageMeta(pageData) {
  const { locale } = useI18n();
  const route = useRoute();

  useHead(() => {
    
    const data = pageData.value;
    if (!data) {
      return { title: 'Loading... | Casatech LLC' };
    }

    const isSpanish = locale.value === 'es';
    const baseUrl = 'https://casatechllc.com';
    const enUrl = `${baseUrl}${data.path}`;
    const esUrl = `${baseUrl}/es${data.path}`;
    const canonicalUrl = isSpanish ? esUrl : enUrl;
    const ogImage = data.image ? `${baseUrl}${data.image}` : `${baseUrl}/images/casatechllc-og-image.png`;

    return {
      // 1. Target the 'title' tag by its ID
      title: data.title,
      htmlAttrs: {
        lang: isSpanish ? 'es' : 'en'
      },
      // 2. Add 'id' to all meta tags
      meta: [
        { id: 'page-description', name: 'description', content: data.description },
        // Open Graph
        { id: 'og-title', property: 'og:title', content: data.title },
        { id: 'og-description', property: 'og:description', content: data.description },
        { id: 'og-url', property: 'og:url', content: canonicalUrl },
        { id: 'og-image', property: 'og:image', content: ogImage },
        { property: 'og:type', content: 'website' },
        { 
          id: 'og-locale',
          property: 'og:locale', 
          content: isSpanish ? 'es_MX' : 'en_US' 
        },
        // Twitter
        { id: 'twitter-card', name: 'twitter:card', content: 'summary_large_image' },
        { id: 'twitter-title', name: 'twitter:title', content: data.title },
        { id: 'twitter-description', name: 'twitter:description', content: data.description },
        { id: 'twitter-image', name: 'twitter:image', content: ogImage }
      ],
      // 3. Add 'id' to the canonical link
      link: [
        { 
          id: 'canonical-link',
          rel: 'canonical', 
          href: canonicalUrl 
        },
        // hreflang links (these are new, so no ID is needed)
        { rel: 'alternate', hreflang: 'en', href: enUrl },
        { rel: 'alternate', hreflang: 'es', href: esUrl },
        { rel: 'alternate', hreflang: 'x-default', href: enUrl }
      ]
    };
  });
}