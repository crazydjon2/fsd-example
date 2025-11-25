<template>
  <div>
    <div v-for="route in routes" :key="route.name">
      <NuxtLink :to="route.link">
        <AppButton>
          <Icon :name="route.icon" />
          <span>{{ $t('links.' + route.name) }}</span>
        </AppButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppButton } from '@shared/ui';

const routes = [
  {
    link: '/pet',
    name: 'market',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/items',
    name: 'items',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/buy',
    name: 'sell',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/r',
    name: 'robucs',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/help',
    name: 'help',
    icon: 'mdi:emoticon-excited',
  }
]
</script>