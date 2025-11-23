<template>
  <ClientOnly>
    <Teleport to="#aside-content">
      <div class="filters-container">
        <component
          v-for="(fc, index) in filterConfig"
          :key="index"
          :is="fc.component"
          v-bind="fc.props"
        />
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute()
import filterMapper from '@features/market-filters/config/filter-mapper'

const filterConfig = filterMapper(route.params.id as string).filters
</script>

<style scoped>
.filters-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>