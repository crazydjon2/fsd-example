<template>
    <div class="wrapper">
        <AppButton v-for="o in allTypes" @click="resolveType(o.value as FilterType)">
            {{ o.name }}
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@features/market-filters';
import type { FilterType } from '@features/market-filters/model/types';
import { AppButton } from '@shared/ui'

const { resolveType } = useFilterStore()
const { allTypes } = storeToRefs(useFilterStore())
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    gap: 16px;
}
</style>