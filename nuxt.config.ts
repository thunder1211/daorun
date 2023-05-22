// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // runtimeConfig: {
  //   public: {
  //      baseURL: '/assets' // Exposed to the frontend as well.
  //   }
  // },
  app: {
    baseURL: '/daorun',
    // buildAssetsDir: "/static/",
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      script: [],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
      ],
      style: [],
      noscript: []
    }
  },

  css: ['assets/scss/index.scss'],

  vite: {
    css: {
      // https://github.com/nuxt-community/style-resources-module/issues/190
      // https://vite.nuxtjs.org/misc/common-issues/#styleresources
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/global.scss";',
        },
      },
    },
  },
  
})
