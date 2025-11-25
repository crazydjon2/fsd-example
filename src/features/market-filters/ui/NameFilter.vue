<template>
    <div class="wrapper">
        <AppInput v-model="name" type="init" white :placeholder="$t('filter.search')" />
    </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@features/market-filters';
import { AppInput } from '@shared/ui';

const { setName } = useFilterStore()
const { name } = storeToRefs(useFilterStore())

watch(name, () => {
    setName(name.value)
})
</script>