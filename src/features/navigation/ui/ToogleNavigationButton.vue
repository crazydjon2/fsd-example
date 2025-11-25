<template>
  <AppButton @click="openMenu">
    <Icon name="material-symbols-light:lists"/>
  </AppButton>
</template>

<script setup lang="ts">
import { AppButton } from '@shared/ui';
import { useAsideStore } from '@features/toogle-aside';

const { openMenu } = useAsideStore()
</script>