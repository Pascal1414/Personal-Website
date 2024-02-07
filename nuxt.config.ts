// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "About",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js",
        },
      ],
      bodyAttrs: {
        class:
          "antialiased bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100",
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
