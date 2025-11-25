<template>
  <AppButton @click="open">
    <Icon name="material-symbols:tune" />
  </AppButton>
</template>

<script setup lang="ts">
import { useAsideStore } from '../model/store';
import { AppButton } from '@shared/ui';

const { open } = useAsideStore()
</script>