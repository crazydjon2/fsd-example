<template>
    <ClientOnly>
        <VDropdown :distance="6" strategy="fixed">
            <!-- This will be the popover reference (for the events and position) -->
            <CartButton />

            <!-- This will be the content of the popover -->
            <template #popper>
                <div class="cart__menu">
                    <CartList />
                    <CartBuy />
                </div>
            </template>
        </VDropdown>
    </ClientOnly>
</template>

<script setup lang="ts">
import { useCartStore } from '@entities/cart/model/cartStore';
import { CartList, CartButton, CartBuy } from '@features/cart';
useCartStore().loadCartFormLc()

</script>

<style>
.cart__menu {
    max-height: 80vh;
    min-width: 300px;
    overflow: auto;
}
</style>