<template>
    <ClientOnly>
        <AdaptivePopup :distance="6" title="Корзина">
            <!-- This will be the popover reference (for the events and position) -->
            <template #trigger>
                <CartButton />
            </template>

            <!-- This will be the content of the popover -->
            <div class="cart__menu ">
                <CartList />
                <CartBuy />
            </div>
        </AdaptivePopup>
    </ClientOnly>
</template>

<script setup lang="ts">
import { useCartStore } from '@entities/cart/model/cartStore';
import { CartList, CartButton, CartBuy } from '@features/cart';
import { AdaptivePopup } from '@shared/ui';
useCartStore().loadCartFormLc()
</script>

<style scoped lang="scss">
.cart__menu {
    max-height: 80vh;
    min-width: 300px;
    overflow: auto;
    @include laptop {
        max-height: 100%;
    }
}
</style>