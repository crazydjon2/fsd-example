import FloatingVue from 'floating-vue'
import type { NuxtApp } from 'nuxt/app'
import 'floating-vue/dist/style.css'

export default defineNuxtPlugin((nuxt: NuxtApp) => {
    nuxt.vueApp.use(FloatingVue)
})