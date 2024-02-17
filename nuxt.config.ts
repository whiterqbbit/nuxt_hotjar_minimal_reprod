export default defineNuxtConfig({
  modules: [
    'nuxt-module-hotjar'
  ],


  hotjar: {
    hotjarId: 1234567,
    scriptVersion: 6,

    // optionally you can turn on debug mode for development
    debug: true
  }
})