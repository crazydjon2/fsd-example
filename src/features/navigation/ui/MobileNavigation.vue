<template>
  <div class="menu">
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
    link: '/pet',
    name: 'Market',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/items',
    name: 'Items',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/buy',
    name: 'Buy',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/r',
    name: '$R',
    icon: 'mdi:emoticon-excited',
  },
  {
    link: '/pet/help',
    name: 'Help',
    icon: 'mdi:emoticon-excited',
  }
]
</script>

<style scoped>
.menu {
  position: fixed;
  bottom: 0;
  z-index: 400;

  display: flex;
  justify-content: space-around;
  width: 100%;

  padding: 16px 0;
  background: white;
}
</style>