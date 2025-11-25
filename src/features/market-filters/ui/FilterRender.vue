<template>
  <ClientOnly>
    <div class="filters-container">
      <div class="wrapper">
        <h1>Фильтр <span v-if="numberOfAppliedFilters" style="color: red">{{ numberOfAppliedFilters }}</span></h1>
        <div class="refresh" @click="resetFilter">
          <p>Сбросить</p>
          <Icon name="material-symbols:close" class="close-icon" style="color: grey" />
        </div>
      </div>
      <component v-for="(fc, index) in filterConfig" :key="index" :is="fc.component" v-bind="fc.props" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute()
import filterMapper from '@features/market-filters/config/filter-mapper'
import { useFilterStore } from '@features/market-filters'

const { resetFilter } = useFilterStore()
const { numberOfAppliedFilters } = storeToRefs(useFilterStore())

const filterConfig = filterMapper(route.params.id as string).filters

onUnmounted(() => {
  resetFilter()
})
</script>

<style scoped lang="scss">
.filters-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h1 {
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;

}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.refresh {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  color: grey;

  & .close-icon {
    margin-top: 2px;
    margin-left: 4px;
  }

}
</style>