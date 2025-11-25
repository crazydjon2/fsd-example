// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Папки и структура
  srcDir: 'src',
  serverDir: 'src/server',
  dir: {
    pages: 'app/routes',
    layouts: 'app/layouts',
    plugins: 'app/plugins',
    middleware: 'app/middleware',
  },

  experimental: {
    headNext: true,
    viewTransition: false,
  },
  css: [
    '~/shared/styles/reset.scss',
    '~/shared/styles/font.scss',
    '~/shared/styles/global.scss'
  ],

  alias: {
    '@': resolve(__dirname, 'src'),
    '@app': resolve(__dirname, 'src/app'),
    '@processes': resolve(__dirname, 'src/processes'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@widgets': resolve(__dirname, 'src/widgets'),
    '@features': resolve(__dirname, 'src/features'),
    '@entities': resolve(__dirname, 'src/entities'),
    '@shared': resolve(__dirname, 'src/shared'),
  },


  i18n: {
    langDir: resolve(__dirname, 'src/shared/config/locales'),
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  vite: {
    plugins: [
      tsconfigPaths({ root: __dirname }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
                  additionalData: `
          @use "@shared/styles/variables.scss" as *;
          @use "@shared/styles/breakpoints.scss" as *;
        `,
        },
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 's-maxage=31536000, immutable' } },
      '/**': { headers: { 'cache-control': 's-maxage=3600, stale-while-revalidate=86400' } },
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/critters',
    '@nuxt/icon'
  ],

  devtools: { enabled: true },

  build: {
    transpile: ['vueuc'],
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})