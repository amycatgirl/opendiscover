// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
	  port: 8001,
  },

  rootDir: "src/",

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: "nav-active"
      }
    }
  },

  runtimeConfig: {
    DB_URI: "mongodb://localhost:27017/revolt",
    public: {
      AUTUMN_URL: "http://local.revolt.chat:3000",
      CLIENT_URL: "http://local.revolt.chat:5173",
      opendiscover: {
        name: "Upryzing OpenDiscover",
      }
    }
  },

  modules: ["@nuxt/image"]
})
