import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],

  imports: {
    dirs: [resolve("stores/**")],
  },

  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
});
