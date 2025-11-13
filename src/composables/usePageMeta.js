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
        { name: 'description', content: data.description },
        // Open Graph
        { property: 'og:title', content: data.title },
        { property: 'og:description', content: data.description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:type', content: 'website' },
        { 
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