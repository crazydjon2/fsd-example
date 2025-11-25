<template>
  <div class="balance-wrapper">
    <div class="balance-info">
      <div v-if="user.balance" class="balance-amount">
        {{ formatPrice(user.balance, user) }}
      </div>
      <div class="balance-label">{{ $t('balance') }}</div>
    </div>

    <button class="topup-btn" @click="addToBalance(1000)">
      <Icon name="material-symbols:add-2" filled class="plus-icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@entities/user';
const { addToBalance } = useUserStore()
import { formatPrice } from '@shared/utils/formatPrice';


const { user } = storeToRefs(useUserStore())

defineEmits<{
  topup: []
}>()
</script>

<style scoped>
.balance-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
}

.balance-info {
  text-align: left;
}

.balance-amount {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.balance-label {
  font-size: 14px;
  color: #64748b;
  margin-top: 4px;
}

.topup-btn {
  width: 48px;
  height: 48px;
  background: #fb923c;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(251, 146, 60, 0.3);
}

.topup-btn:hover {
  background: #f97316;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(251, 146, 60, 0.4);
}

.topup-btn:active {
  transform: translateY(0);
}

.plus-icon {
  font-size: 28px;
  color: white;
}
</style>