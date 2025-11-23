<template>
  <AppAccordion>
    <template #title>
      Цена
    </template>
    <div class="wrapper">
      <AppInput v-model="minPrice" type="number" placeholder="0.00">
        <template #prepend>
          <span class="prepend">€</span>
        </template>
      </AppInput>
      <span class="divider">-</span>
      <AppInput v-model="maxPrice" type="number" placeholder="∞">
        <template #prepend>
          <span class="prepend">€</span>
        </template>
      </AppInput>
    </div>
  </AppAccordion>
</template>

<script setup lang="ts">
import { AppInput, AppAccordion } from '@shared/ui';

const minPrice = ref()
const maxPrice = ref()
</script>

<style scoped lang="scss">
.wrapper {
  align-items: center;
  display: flex;
  gap: 11px;
  justify-content: space-between;
}

.divider {
  font-size: 24px;
  color: $text-light-grey;
}

.prepend {
  font-size: 20px;
  color: #646464
}
</style>