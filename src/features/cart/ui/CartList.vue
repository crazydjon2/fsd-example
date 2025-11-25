<template>
  <div class="list">
    <template v-if="items.length">
      <CartItem v-for="item in items" :pet="item.good" :count="item.count" :price="format(item.good.price)" />
    </template>
    <p v-else>корзина пуста</p>
  </div>
</template>

<script setup lang="ts">
import { CartItem } from '@entities/cart';
import { useCartStore } from '@entities/cart/model/cartStore';
import { usePriceFormatter } from '@features/formart-price';

const { items } = storeToRefs(useCartStore())
const { format } = usePriceFormatter()
</script>

<style scoped>
.list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>