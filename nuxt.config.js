export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Simply Diary',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Simply Diary is an open source platform for an online diary, its really just a diary. Each diary has its own code, who knows the code also has access to the diary. Completely free and without registration.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Simply Diary is an open source platform for an online diary, its really just a diary. Each diary has its own code, who knows the code also has access to the diary. Completely free and without registration.'
      },
      {
        name: "theme-color",
        content: "#d41a4c"
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  pwa: {
    icon: true,
    manifest: {
      name: 'Simply Diary',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/pwa', ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'simplydiary_lang',
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          index: {
            heroMessage1: "It's really just a diary, but online."
          },
        },
        de: {
          index: {
            heroMessage1: "Es ist wirklich nur ein Tagebuch, nur online!"
          },
        }
      }
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
