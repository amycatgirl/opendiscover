// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: "nav-active"
      }
    }
  },

  runtimeConfig: {
    public: {
      AUTUMN_URL: "https://local.revolt.chat:3000",
      DB_URI: "mongodb://local.revolt.chat:27017/revolt",
      CLIENT_URL: "https://local.revolt.chat:5173"
    }
  },

  modules: ["@nuxt/image"]
})