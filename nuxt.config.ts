// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'de',
    locales: [
      { code: 'de', name: 'Deutsch', file: 'de.json', iso: 'de' },
      { code: 'en', name: 'English', file: 'en.json', iso: 'en' },
    ],
    // lazy: true,
    langDir: 'locales',
    strategy: 'prefix',
  },
  runtimeConfig: {
    mailjetApiKey: '',
    mailjetSecretKey: '',
    contactToEmail: '',
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700;900&display=swap'
        }
      ]
    }
  }
})