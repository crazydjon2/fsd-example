<template>
    <div class="icon">
        <Icon name="material-symbols:add-shopping-cart" style="color: white" />
        <span class="count">{{ itemsCount }}</span>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@entities/cart/model/cartStore';

const { itemsCount } = storeToRefs(useCartStore())
</script>

<style scoped>
.icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    width: 46px;
    height: 46px;

    background: #FE9920;
}

.count {
    pointer-events: none;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 20px;
    height: 20px;
    color: black;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: white;

    border-radius: 4px;
}
</style>