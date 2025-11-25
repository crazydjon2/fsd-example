<template>
    <div v-for="p in properties" :key="p.name" :style="{ background: p.color }" :class="p.circle ? 'rounded' : ''"
        class="item">{{
            p.name }}</div>
</template>

<script setup lang="ts">
import type { PetItem } from '../model/types';
import getPropertiesStyle from '../utils/get-pet-propery-style';

const props = defineProps<{ pet: PetItem }>()

const properties = computed(() => getPropertiesStyle(props.pet))
</script>

<style scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 3px 4px;
    font-size: 9px;
    aspect-ratio: 1/1;
    color: white;

    &.rounded {
        border-radius: 50%;
    }
}
</style>