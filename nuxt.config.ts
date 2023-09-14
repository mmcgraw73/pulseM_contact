import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  windicss: {
    config: {
      attributify: true,
    },
  },
  css: ['@/assets/fonts.css'],
  modules: ['nuxt-windicss'],
});
