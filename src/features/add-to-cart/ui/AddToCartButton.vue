<template>
    <div class="icon">
        <Icon name="material-symbols:add-shopping-cart" style="color: white" @click="addToCart(pet)" />
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@entities/cart/model/cartStore';
import type { PetItem } from '@entities/pet/model/types';

const { addToCart } = useCartStore()

defineProps<{ pet: PetItem }>()
</script>

<style scoped>
.icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    width: 32px;
    height: 32px;

    background: #FE9920;
}
</style>