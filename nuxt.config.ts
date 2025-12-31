import Aura from '@primeuix/themes/aura';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: [
        // 'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/scss/main.scss'
    ],
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: ".app-dark"
                }
            }
        }
    }

})
