import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],

  pinia: {
    storesDirs: [
      join(currentDir, './stores')+'/**',
    ]
  },

  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
});
