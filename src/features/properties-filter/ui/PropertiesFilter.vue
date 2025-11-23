<template>
  <AppAccordion>
    <template #title>
      Свойвства
    </template>
    <div class="wrapper">
      <AppCheckbox v-model="selected" v-for="item in options" v-bind="item" />
    </div>
  </AppAccordion>
</template>

<script lang="ts" setup>
import { AppCheckbox, AppAccordion } from '@shared/ui';
import useFilterStore from '../../market-filters/model/filtersStore'
const { setFilter, setProperties } = useFilterStore()

defineProps<{
  options: {
    value: string;
    label: string;
    icon: string,
    color: string,
  }[]
}>()

const selected = ref<string[]>([]);

watch(selected, () => {
  if (selected.value.includes('fly') || selected.value.includes('ride')) {
    setProperties(selected.value.includes('fly'), selected.value.includes('ride'))
  } else {
    setProperties(false, false)
  }
  setFilter('levels', selected.value.filter((s) => s !== 'fly' && s !== 'ride'))
})
</script>