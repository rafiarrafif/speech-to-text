// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "DM Sans": "100..900",
    },
  },
  tailwindcss: { exposeConfig: true },
});
