<template>
    <div class="wrapper">
        <AppChip v-for="t in pickedTypes" :key="t" @click="resolveType(t)">{{ t }} x</AppChip>
    </div>
</template>

<script setup lang="ts">
import useFilterStore from '../../market-filters/model/filtersStore'
import { AppChip } from '@shared/ui';

const { resolveType } = useFilterStore()
const { pickedTypes, filterTypes } = storeToRefs(useFilterStore())
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    gap: 8px;
}
</style>