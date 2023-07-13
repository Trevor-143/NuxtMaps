// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    googleApiKey: process.env.GOOGLE_API_KEY,
    public: {
      GAK: process.env.GOOGLE_API_KEY
    }
  },
})
