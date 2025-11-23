<template>
  <div class="container">
    <AppHeader />
    <div class="container__content">
      <AppAside />

      <main>
        <slot name="main" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from '@widgets/header';
import AppAside from '@widgets/aside/ui/AppAside.vue';
</script>

<style scoped lang="scss">
.container {
  margin-top: 82px;

  &__content {
    display: flex;
  }
}

main {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: $light-grey;
}
</style>