<template>
    <div class="wrapper">
        <AppChip v-for="t in pickedTypes" :key="t" @click="resolveType(t)">{{ t }}
            <Icon name="material-symbols:close" style="color: black" />
        </AppChip>
    </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@features/market-filters';
import { AppChip } from '@shared/ui';

const { resolveType } = useFilterStore()
const { pickedTypes } = storeToRefs(useFilterStore())
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    gap: 8px;
}
</style>