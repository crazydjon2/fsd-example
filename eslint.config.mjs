import withNuxt from './.nuxt/eslint.config.mjs'

export default [
  ...withNuxt(),
  {
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', "@feature-sliced"],
  },
]