<template>
  <AppAccordion>
    <template #title>{{ $t('filter.rarity') }}</template>
    <div class="wrapper">
      <template v-if="!isLaptop">
        <div v-for="item in options" :key="item.value" class="item" v-tooltip="item.name"
          :class="rarities.includes(item.value) && 'active'" :style="{ background: item.color }"
          @click="toggleRarity(item.value)">
          <div class="item--accent" :style="{ background: item.hoverColor }" />
        </div>
      </template>
      <template v-else>
        <AppChip v-for="item in options" :key="item.value" @click="toggleRarity(item.value)">
          <span>{{ item.name }}</span>
          <Icon v-if="rarities.includes(item.value)" name="material-symbols:close" style="color: black" />
        </AppChip>
      </template>
    </div>
  </AppAccordion>
</template>

<script setup lang="ts">
import { useFilterStore } from '@features/market-filters';
import { useIsLaptop } from '@shared/lib/useMediaQuery';
import { AppAccordion, AppChip } from '@shared/ui';

const isLaptop = useIsLaptop()

defineProps<{
  options: {
    name: string;
    value: string;
    color: string;
    hoverColor: string;
  }[]
}>()

const { rarities } = storeToRefs(useFilterStore())
const { toggleRarity } = useFilterStore()
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
