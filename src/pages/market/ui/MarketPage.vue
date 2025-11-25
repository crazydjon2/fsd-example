<template>
  <div>
    <CatalogWidget />
  </div>
</template>

<script setup lang="ts">
import CatalogWidget from '@widgets/catalog';

const { t } = useI18n()

useHead({
    title: t('pages.market.title'),
    meta: [
      { name: 'description', content: t('pages.market.description') },
      { property: 'og:title', content: t('pages.market.title') },
    ]
  })
</script>
