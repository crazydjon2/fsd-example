<template>
  <div class="filter">
    <TypeFilter v-if="filterConfig.types" />
    <div class="filter__bottom">
      <div class="input">
        <NameFilter v-if="filterConfig.search" />
      </div>
      <PickedTypes v-if="filterConfig.types" />
    </div>
  </div>
  <div class="market-grid">
    <div ref="scrollRef" class="grid-container" :style="{ height: `${containerHeight}px` }">
      <div v-for="(virtualRow, index) in virtualItems" :key="index" :style="{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${virtualRow.size}px`,
        transform: `translateY(${virtualRow.start}px)`
      }" class="grid-row">
        <template v-for="col in columnsPerRow" :key="col">
          <div v-if="hasPetAt(virtualRow.index, col - 1)" class="grid-cell">
            <PetCard v-if="getPetAt(virtualRow.index, col - 1)" :pet="getPetAt(virtualRow.index, col - 1)" :price="format(getPetAt(virtualRow.index, col - 1).price)">
              <template #action>
                <AddToCartButton :pet="getPetAt(virtualRow.index, col - 1)" />
              </template>
            </PetCard>
            <PetSkeletonCard v-else />
          </div>
        </template>
      </div>
    </div>

    <div v-if="!isLoading && !isFetchingNextPage && allPets.length === 0" class="empty">
      Питомцев не найдено
    </div>
  </div>
</template>

<script async setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useVirtualizer } from '@tanstack/vue-virtual'
import { PetCard, PetSkeletonCard } from '@entities/pet'
import { usePetsQuery } from '@entities/pet/model/use-pets-query'

import { AddToCartButton } from '@features/add-to-cart'
import { NameFilter } from '@features/market-filters'
import { TypeFilter, PickedTypes } from '@features/market-filters'

import filterMapper from '@features/market-filters/config/filter-mapper'
import { useUserStore } from '@entities/user'
import type { PetItem } from '@entities/pet/model/types'
import { usePriceFormatter } from '@features/formart-price'
import { useFilterStore } from '@features/market-filters'

const { format } = usePriceFormatter()
const { currency } = storeToRefs(useUserStore())
const { initFilter } = useFilterStore()
const { filters } = storeToRefs(useFilterStore())

const route = useRoute()
const filterConfig = filterMapper(route.params.id as string).top
initFilter(filterConfig.types)

const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = await usePetsQuery(filters, currency)

const allPets = computed(() => data.value?.pages.flatMap(p => p.items) ?? [])
const skeletonCount = 72

// Динамические элементы с добавлением skeleton при загрузке
const petsWithSkeletons = computed(() => {
  if (isLoading.value && allPets.value.length === 0) {
    return Array(skeletonCount).fill(null)
  } else if (isFetchingNextPage.value) {
    return [...allPets.value, ...Array(skeletonCount).fill(null)]
  }
  return allPets.value
})

const scrollRef = ref<HTMLElement>()

// Динамический подсчет колонок и строк
const columnsPerRow = ref(1)
const rowCount = ref(0)
const containerHeight = ref(0)

const updateColumns = () => {
  if (!scrollRef.value) return
  const containerWidth = scrollRef.value.clientWidth
  const minCardWidth = 155 + 12 // 155px + gap
  columnsPerRow.value = Math.floor(containerWidth / minCardWidth) || 1
  rowCount.value = Math.ceil(petsWithSkeletons.value.length / columnsPerRow.value)
  if (rowVirtualizer.value) containerHeight.value = rowVirtualizer.value.getTotalSize()
}

// Виртуализатор строк
const rowVirtualizer = useVirtualizer({
  get count() { return rowCount.value },
  getScrollElement: () => scrollRef.value || null,
  estimateSize: () => 190,
})

const virtualItems = computed(() => rowVirtualizer.value.getVirtualItems())

const hasPetAt = (row: number, col: number) => (row * columnsPerRow.value + col) < petsWithSkeletons.value.length
const getPetAt = (row: number, col: number): PetItem => petsWithSkeletons.value[row * columnsPerRow.value + col]

// Следим за изменением данных
watch([petsWithSkeletons, columnsPerRow], () => {
  rowCount.value = Math.ceil(petsWithSkeletons.value.length / columnsPerRow.value)
  nextTick(() => {
    if (rowVirtualizer.value) containerHeight.value = rowVirtualizer.value.getTotalSize()
  })
})

// Infinite scroll по всей странице
const handleScroll = () => {
  const scrollFromBottom =
    document.documentElement.scrollHeight -
    window.innerHeight -
    window.scrollY

  if (scrollFromBottom < 200 && hasNextPage.value && !isFetchingNextPage.value && !isLoading.value) {
    fetchNextPage()
  }
}

onMounted(() => {
  updateColumns()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', updateColumns)
  nextTick(() => handleScroll())
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateColumns)
})
</script>

<style scoped lang="scss">
.market-grid {
  position: relative;
  display: flex;
  flex-direction: column;
}

.grid-container {
  position: relative;
  margin-top: 16px
}

.grid-row {
  display: grid;
  gap: 12px;
  padding: 0 16px;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
}

.grid-cell {
  aspect-ratio: 1;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.empty {
  text-align: center;
  padding: 24px;
  color: #777;
}

.filter {
  position: sticky;
  top: 82px;
  z-index: 200;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  background: $light-grey;

  &__bottom {
    display: flex;
    gap: 16px;

    & .input {
      max-width: 360px;
    }
  }
}
</style>
