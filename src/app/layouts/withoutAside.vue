<template>
  <div class="container">
    <AppHeader />
    <MobileNavigation v-if="isLaptop" />
    <div class="container__content">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from '@widgets/header';
import { MobileNavigation } from '@features/navigation';
import { useIsLaptop } from '@shared/lib/useMediaQuery';

const isLaptop = useIsLaptop()
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