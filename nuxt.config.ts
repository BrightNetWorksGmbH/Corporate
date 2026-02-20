// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    mailjetApiKey: '',
    mailjetSecretKey: '',
    mailjetFromEmail: '',
    mailjetFromName: 'BryteArk Website',
    contactToEmail: 'samuelnegalign2@gmail.com',
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
