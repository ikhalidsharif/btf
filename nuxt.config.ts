export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'ar', language: 'ar-BH', dir: 'rtl', name: 'العربية' },
      { code: 'en', language: 'en-US', dir: 'ltr', name: 'English' },
    ],
    defaultLocale: 'ar',
    strategy: 'prefix',
    vueI18n: './i18n/i18n.config.ts',
  },

  content: { highlight: false },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Outfit:wght@300;400;600;700&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      tapPublicKey: process.env.TAP_PUBLIC_KEY || 'pk_test_xxxxxxx',
    },
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
})
