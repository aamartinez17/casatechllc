import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'

import { allPosts } from './src/assets/data/BlogData.js'

const blogRoutes = allPosts.map(post => `/blog/${post.slug}`)

const staticPaths = [
  '/',
  '/about',
  '/services',
  '/services/startup-tech',
  '/portfolio',
  '/blog',
  '/contact',
  '/thank-you',
]

const allPaths = [
  ...staticPaths, // All English paths
  ...staticPaths.map((path) => `/es${path}`), // All Spanish paths
  ...allPosts.map((post) => `/blog/${post.slug}`), // English blog posts
  ...allPosts.map((post) => `/es/blog/${post.slug}`), // Spanish blog posts
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    sitemap({
      hostname: 'https://casatechllc.com',
      dynamicRoutes: allPaths, // Use the new list of all URLs
      
      // --- 3. THIS IS THE CRITICAL SEO PART ---
      links: (route) => {
        // Get the base route (e.g., /about or /blog/my-post)
        const baseRoute = route.startsWith('/es') ? route.substring(3) : route;
        
        // Handle the root '/' path
        const enPath = baseRoute || '/'; 
        const esPath = `/es${baseRoute || '/'}`;

        return [
          { lang: 'en', url: `https://casatechllc.com${enPath}` },
          { lang: 'es', url: `https://casatechllc.com${esPath}` },
        ]
      },
    })
  ],
//   optimizeDeps: {
//   exclude: [
//     'vue3-recaptcha-v2'
//   ],
// },


  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
