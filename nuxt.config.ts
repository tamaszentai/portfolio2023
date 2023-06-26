// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Tamas Zentai Portfolio',
        },
    },
    ssr: false,
    runtimeConfig: {
        public: {
            EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
            EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
        }
    },
    devtools: {enabled: true},
    modules: [
        // ...
        '@pinia/nuxt',
        '@nuxtjs/device',
    ],
})
