import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - My Awesome Nuxt App',
    title: 'My Awesome Nuxt App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a description of my awesome Nuxt app.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin: 'anonymous' },
      { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js', integrity: 'sha384-v7Kwv/q8WmveVzQZVCmJH1xQKj+WRtvayZYA/Keu41LjwNGa8jK7gqY3qNFhJIT6', crossorigin: 'anonymous' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', integrity: 'sha384-JjSmVgyd0p3pXB1rRibZU1OP+wnxEK6P9aUP29reX1j4jhEhWAVYGXtP0UafcT0M', crossorigin: 'anonymous' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css : [
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['@nuxtjs/vuetify', { iconfont: 'mdi' }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {}
  }
}
