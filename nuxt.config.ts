export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [// UI components
        '@nuxt/ui', // Internationalization
        '@nuxtjs/i18n', // Tailwind CSS
        '@nuxtjs/tailwindcss', '@nuxt/image'],

    css: ['~/assets/css/tailwind.css'], // Load Tailwind globally

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    i18n: {
        // baseUrl: process.env.CLIENT_URL,
        langDir: 'locales',
        locales: [
            {
                code: 'en',
                language: 'en-US',
                name: 'English',
                files: [
                    'en/contact.ts',
                    'en/header.ts',
                    'en/footer.ts',
                ],
            },
            {
                code: 'th',
                language: 'th-TH',
                name: 'ไทย',
                files: [
                    'th/contact.ts',
                    'th/header.ts',
                    'th/footer.ts',
                ],
            },
        ],
        strategy: 'prefix_except_default',
        lazy: true,
        defaultLocale: 'th',
        // vueI18n: './i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_lang',
            redirectOn: 'root', // recommended
        },
    },
    devtools: {enabled: true}
})