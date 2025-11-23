<template>
    <div class="wrapper">
        <AppButton v-for="o in allTypes" @click="resolveType(o.value)">
            {{ o.name }}
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import { AppButton } from '@shared/ui'
import useFilterStore from '../../market-filters/model/filtersStore'

const { resolveType } = useFilterStore()
const { allTypes } = storeToRefs(useFilterStore())
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    gap: 16px;
}
</style>