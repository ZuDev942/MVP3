export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Moshop',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css'
            }
        ],
        script: [{
                type: "module",
                src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
            },
            {
                nomodule: "",
                src: "https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/bootstrap/css/bootstrap.css',
        '~/assets/bootstrap/css/bootstrap.min.css',
        '~/assets/scss/reset.css',
        '~/assets/scss/global.scss'
    ],
    styleResources: {
        scss: ['~/assets/scss/color.scss']
    },
    js: ['~/assets/bootstrap/js/bootstrap.min.js'],
    target: 'static',
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}