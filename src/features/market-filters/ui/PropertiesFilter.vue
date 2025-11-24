<template>
  <AppAccordion>
    <template #title>
      Свойвства
    </template>
    <div class="wrapper">
      <AppCheckbox v-model="selectedProperties" v-for="item in options" v-bind="item" />
    </div>
  </AppAccordion>
</template>

<script lang="ts" setup>
import { useFilterStore } from '@features/market-filters';
import { AppCheckbox, AppAccordion } from '@shared/ui';
const { setFilter, setProperties } = useFilterStore()

defineProps<{
  options: {
    value: string;
    label: string;
    icon: string,
    color: string,
  }[]
}>()

const { selectedProperties } = storeToRefs(useFilterStore())

watch(selectedProperties, () => {
  if (selectedProperties.value.includes('fly') || selectedProperties.value.includes('ride')) {
    setProperties(selectedProperties.value.includes('fly'), selectedProperties.value.includes('ride'))
  } else {
    setProperties(false, false)
  }
  setFilter('levels', selectedProperties.value.filter((s) => s !== 'fly' && s !== 'ride'))
})
</script>