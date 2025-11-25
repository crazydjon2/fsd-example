<template>
  <div>
    <div v-for="route in routes" :key="route.name">
      <NuxtLink :to="route.link">
        <AppButton>
          <Icon :name="route.icon" />
          <span>{{ route.name }}</span>
        </AppButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppButton } from '@shared/ui';

const routes = [
  {
    link: '/',
    name: 'Market',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/items',
    name: 'Items',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/buy',
    name: 'Buy',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/robucs',
    name: '$R',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/help',
    name: 'Help',
    icon: 'mdi:emoticon-excited',
  }
]
</script>