<template>
  <AppAccordion>
    <template #title>
      Цена
    </template>
    <div class="wrapper">
      <AppInput v-model="minPrice" type="number" placeholder="0.00">
        <template #prepend>
          <span class="prepend">{{ currencySign }}</span>
        </template>
      </AppInput>
      <span class="divider">-</span>
      <AppInput v-model="maxPrice" type="number" placeholder="∞">
        <template #prepend>
          <span class="prepend">{{ currencySign }}</span>
        </template>
      </AppInput>
    </div>
  </AppAccordion>
</template>

<script setup lang="ts">
import { usePriceFormatter } from '@features/formart-price';
import { useFilterStore } from '@features/market-filters';
import { AppInput, AppAccordion } from '@shared/ui';

const { setPrice } = useFilterStore()
const { minPrice, maxPrice } = storeToRefs(useFilterStore())

const { currencySign } = usePriceFormatter()


watch(minPrice, () => {
  setPrice(minPrice.value, false)
})
watch(maxPrice, () => {
  setPrice(maxPrice.value, true)
})
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