<template>
  <div class="currency-switcher">
    <div>
      <button v-for="currency in currencies" :key="currency" :class="{ active: currentCurrency === currency }"
        class="currency-btn" :disabled="currency !== 'usd'" @click="changeCurrency(currency)">
        {{ currency }}
      </button>
    </div>
    <p class="hint">В целях избежание багов по переводу цен на фронте (пересчет стоимости товаров в корзине и тд) другие валюты отключены, но учитываются в запросах и
      ценах</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@entities/user';
const { changeCurrency } = useUserStore()
const { user } = storeToRefs(useUserStore())
type SupportedCurrencies = 'eur' | 'rub' | 'usd'

const currencies = ['eur', 'rub', 'usd']

const currentCurrency = ref<SupportedCurrencies>()

watchEffect(() => {
  if (user.value.currency) {
    currentCurrency.value = user.value.currency as SupportedCurrencies
  }
})
</script>

<style scoped lang="scss">
.currency-switcher {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: fit-content;
}

.wrapper {
    display: flex;
}

.hint {
  text-align: center;
  color: $text-grey;
  max-width: 300px;
  padding-bottom: 16px;
}

.currency-btn {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 56px;
}

.currency-btn:hover {
  color: #1e293b;
  background: #f1f5f9;
}

.currency-btn.active {
  background: #1e293b;
  color: white;
}
</style>