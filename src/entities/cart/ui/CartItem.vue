<template>
  <div class="cart-pet-item" @click.stop>
    <NuxtImg loading="lazy" :modifiers="{ quality: 80 }" :src="pet.imageUri" :alt="pet.name" class="pet-avatar" />

    <div class="pet-info">
      <div class="pet-subtitle">{{ pet.name }}</div>
      <div class="pet-price">{{ price }}</div>
    </div>

    <div v-if="pet.rare" class="rarity"
      :style="{ background: rarityColors[pet.rare] ? rarityColors[pet.rare] : rarityColors.default }" />

    <div class="pet-tags">
      <PetProperties :pet />
    </div>

    <div class="quantity-controls">
      <button @click="removeFromCart(pet)" :disabled="count <= 1">
        <Icon name="ic:round-minus" filled />
      </button>
      <span class="quantity">{{ count }}</span>
      <button @click="addToCart(pet)">
        <Icon name="material-symbols:add-2" filled />
      </button>
    </div>

    <button class="remove-btn" @click="deleteFromCart(pet)">
      <Icon name="material-symbols:close" filled />
    </button>
  </div>
</template>

<script setup lang="ts">
import { type PetItem, rarityColors } from '@entities/pet/model/types';
import PetProperties from '@entities/pet/ui/PetProperties.vue';
import { useCartStore } from '../model/cartStore';

const { addToCart, removeFromCart, deleteFromCart } = useCartStore()

defineProps<{
  pet: PetItem;
  count: number
  price: string
}>();
</script>

<style scoped>
.cart-pet-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 16px;
  user-select: none;
  transition: background 0.2s;
}

.cart-pet-item:hover {
  background: #f9f9f9;
}

.pet-avatar {
  width: 56px;
  height: 56px;
  object-fit: contain;
  flex-shrink: 0;
}

.pet-info {
  flex: 1;
  min-width: 0;
}

.pet-subtitle {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.2;
}

.pet-title {
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
  margin-top: 2px;
  line-height: 1.2;
}

.pet-price {
  font-size: 16px;
  font-weight: 700;
  color: #f97316;
  margin-top: 4px;
}

.pet-tags {
  display: flex;
  gap: 6px;
}

.tag {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  border-radius: 8px;
  padding: 4px;
}

.quantity-controls button {
  width: 32px;
  height: 32px;
  background: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.quantity-controls button:hover:not(:disabled) {
  background: #e2e8f0;
  transform: scale(1.05);
}

.quantity-controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity {
  min-width: 24px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
}

.remove-btn {
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  transition: all 0.2s;
}

.remove-btn:hover {
  background: #fee2e2;
  color: #ef4444;
}

.rarity {
  position: absolute;
  width: 2px;
  left: 0px;
  height: 60%;
}
</style>