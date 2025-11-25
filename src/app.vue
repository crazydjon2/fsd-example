<template>
  <NuxtPage />
</template>

<script setup async lang="ts">
import { useUserStore } from '@entities/user';

const { setLocale } = useI18n()
const { user } = storeToRefs(useUserStore())

await useUserStore().load()

if (user.value.language) {
  await setLocale(user.value.language as ('ru' | 'en'))
}
</script>