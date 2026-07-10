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
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap',
        },
      ],
      style: [
        { children: `* { font-family: 'Tajawal', sans-serif !important; }` }
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      tapPublicKey: process.env.TAP_PUBLIC_KEY || '',
      supabaseUrl: 'https://gdhjyokwozlgocsmlfoj.supabase.co',
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaGp5b2t3b3psZ29jc21sZm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2ODc5NDMsImV4cCI6MjA5OTI2Mzk0M30.mPRjFSP8vUC52BxKrqsapx0inaBq3psPVliKNko-XsA',
    },
  },

  nitro: {
    prerender: { failOnError: false },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
})
