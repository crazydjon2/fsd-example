import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: null,
        name: '',
        avatar: '',
        language: '',
        currency: 'rub',
        balance: 0
    })

    const currency = computed(() => {
        return user.value.currency
    })

    async function load() {
        const data = await $fetch('/api/user')
        user.value = data
    }

    async function update(payload: { language?: string, currency?: string, balance?: number }) {
        const data = await $fetch('/api/user', {
            method: 'PATCH',
            body: payload
        })
        user.value = data
    }

    async function changeLanguage(code: string) {
        await update({ language: code })
    }

    async function changeCurrency(code: string) {
        await update({ currency: code })
    }

    async function addToBalance(balance: number) {
        await update({ balance: user.value.balance + balance })
    }

     async function removeFromBalance(balance: number) {
        if (user.value.balance - balance > 0) {
        await update({ balance: user.value.balance - balance })
        } else {
            throw new Error('Недостаточно баланса')
        }
    }

    return { user, load, changeLanguage, changeCurrency, addToBalance, removeFromBalance, currency }
})
