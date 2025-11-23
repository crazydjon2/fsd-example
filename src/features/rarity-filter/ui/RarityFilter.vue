<template>
  <AppAccordion>
    <template #title>Редкость</template>
    <div class="wrapper">
      <div v-for="item in options" class="item" :class="selected.includes(item.value) && 'active'"
        :style="{ background: item.color }" @click="resolveItem(item.value)">
        <div class="item--accent" :style="{ background: item.hoverColor }" />
      </div>
    </div>
  </AppAccordion>
</template>

<script setup lang="ts">
import { AppAccordion } from '@shared/ui';
import useFilterStore from '../../market-filters/model/filtersStore'
const { setFilter } = useFilterStore()

defineProps<{
  options: {
    name: string;
    value: string;
    color: string;
    hoverColor: string;
  }[]
}>()

const selected = ref<string[]>([])
function resolveItem(item: string) {
  if (selected.value.includes(item)) {
    selected.value = selected.value.filter((s) => s !== item)
  } else {
    selected.value.push(item)
  }
  setFilter('rarities', selected.value)
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  gap: 10px
}

.item {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 16px;

  &--accent {
    position: absolute;
    bottom: 0;
    height: 16px;
    width: 100%;
    border-radius: 16px;
    transition: 0.3s;
  }

  &.active::before {
    content: '✓';
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.active &--accent {
    height: 100%;
  }

  &:hover &--accent {
    height: 100%;
  }
}
</style>