<!-- components/CartFooter.vue -->
<template>
    <div class="cart-footer">
        <!-- Сумма покупки -->
        <div v-if="items.length" class="total-block">
            <span class="total-label">Сумма покупки</span>
            <span class="total-amount">{{ format(totalPrice) }} ₽</span>
        </div>

        <!-- Кнопка купить -->
        <button class="buy-button" @click="buy" :disabled="!items.length">
            <Icon name="heroicons:shopping-cart-20-solid" class="buy-icon" filled />
            <span>Купить</span>
        </button>
        <p v-if="error" style="color: red">{{ error }}</p>

        <!-- Очистить корзину -->
        <button class="clear-button" @click="clearCart" :disabled="!items.length">
            Очистить корзину
        </button>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@entities/cart/model/cartStore';
import { usePriceFormatter } from '@features/formart-price';
import { useUserStore } from '@entities/user';

const { format } = usePriceFormatter()
const { removeFromBalance } = useUserStore()

const { clearCart } = useCartStore()
const { items } = storeToRefs(useCartStore())

const totalPrice = computed(() => {
    return items.value.reduce((sum, i) => {
        return sum + (i.count * i.good.price)
    }, 0)
})

const error = ref('')
async function buy() {
    error.value = ''
    try {
        await removeFromBalance(totalPrice.value)
        clearCart()
    } catch(e) {
        error.value = 'Недостаточно баланса'
    }
}
</script>

<style scoped>
.cart-footer {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    background: #f8fafc;
    border-radius: 16px;
}

.total-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.total-label {
    font-size: 15px;
    color: #64748b;
    font-weight: 500;
}

.total-amount {
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
}

.buy-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px;
    background: #fb923c;
    /* оранжевый как на скриншоте */
    color: white;
    font-size: 17px;
    font-weight: 600;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(251, 146, 60, 0.3);
}

.buy-button:hover {
    background: #f97316;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(251, 146, 60, 0.4);
}

.buy-button:active {
    transform: translateY(0);
}

.buy-icon {
    font-size: 22px;
}

.clear-button {
    padding: 12px;
    background: white;
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
}

.clear-button:hover {
    background: #f1f5f9;
    color: #475569;
}
</style>