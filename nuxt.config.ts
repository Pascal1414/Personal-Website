// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    head: {
      
      script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js' }],
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
