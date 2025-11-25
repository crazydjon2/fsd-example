<template>
  <AppAccordion>
    <template #title>
      {{ $t('filter.property') }}
    </template>
    <div class="wrapper">
      <AppCheckbox v-model="selectedProperties" v-for="item in options" v-bind="item" :label="t('property.' + item.value)" />
    </div>
  </AppAccordion>
</template>

<script lang="ts" setup>
import { useFilterStore } from '@features/market-filters';
import { AppCheckbox, AppAccordion } from '@shared/ui';
const { setFilter, setProperties } = useFilterStore()
const { t } = useI18n()

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