import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemap from 'vite-plugin-sitemap'

import { allPosts } from './src/assets/data/BlogData.js'

const blogRoutes = allPosts.map(post => `/blog/${post.slug}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    sitemap({ // 4. Add the sitemap plugin
      hostname: 'https://casatechllc.com', // Your final domain
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/services/startup-tech',
        '/portfolio',
        '/blog',
        '/contact',
        ...blogRoutes // 5. Add all your dynamic blog posts!
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
