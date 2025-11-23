<template>
    <div class="wrapper">
        <AppInput v-model="name" type="init" white placeholder="Быстрый поиск" />
    </div>
</template>

<script setup lang="ts">
import { AppInput } from '@shared/ui';
import useFilterStore from '../../market-filters/model/filtersStore'

const { setName } = useFilterStore()

const name = ref('')

watch(name, () => {
    setName(name.value)
})
</script>