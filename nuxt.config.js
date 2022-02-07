export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Mode: https://nuxtjs.org/docs/configuration-glossary/configuration-mode/
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/codyhouse-framework/main/assets/js/util.js', async: true }
    ],
    htmlAttrs: {
      class: 'js'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/app.scss',
  ],

  /*
   ** Style Resources
   ** Variables, mixins and functions to made accessible globally
   */
  styleResources: {
    scss: [
      // '~/assets/scss/resources/_breakpoints.scss',
      // '~/assets/scss/resources/_mixins.scss'
      '@/node_modules/codyhouse-framework/main/assets/css/base/_mixins.scss',
      '@/node_modules/codyhouse-framework/main/assets/css/base/_breakpoints.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Our Vite CodyHouse Component Library
    { src: '~/plugins/viteComponentLibrary', ssr: true },

    // Our CMS API repository
    '~/plugins/apiRepository'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // Vue Config: https://nuxtjs.org/docs/configuration-glossary/configuration-vue-config/
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-router/
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',

    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-generate/
  generate: {
    dir: 'public'
  }
}
