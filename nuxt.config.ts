// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }

  modules: ["@nuxtjs/supabase", "@vueuse/nuxt", "@pinia/nuxt"],

  css: [
    "@/assets/main.css",
    "primevue/resources/themes/mira/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  supabase: {
    cookies: {
      lifetime: 60 * 60 * 8, // 8 hours
    },
    redirect: {
      login: "/login",
      callback: "/",
    },
  },

  // components: false,
});
