import { defineStore } from 'pinia'
import { saveCart, loadCart } from '@shared/lib/local-storage/cartStorage'
import type { CartItem } from './types'
import type { PetItem } from '@entities/pet/model/types'

export const useCartStore = defineStore('cart', () => {
    const items = ref<CartItem[]>([])

    const addToCart = (pet: PetItem) => {
        if (items.value.some((ci) => ci.good.id === pet.id)) {
            const item = items.value.find((ci) => ci.good.id === pet.id)
            if (item) {
                item.count++
            }
        } else {
            items.value.push({
                count: 1,
                good: pet,
            })
        }

        saveCart(items.value)
    }

    const itemsCount = computed(() => {
        return items.value.reduce((sum, i) => {
            return sum + i.count
        }, 0)
    })

    const removeFromCart = (pet: PetItem) => {
        if (items.value.some((ci) => ci.good.id === pet.id)) {
            const item = items.value.find((ci) => ci.good.id === pet.id)
            if (item) {
                item.count === 1 ? items.value = items.value.filter((ct) => ct.good.id !== pet.id) : item.count--
            }
            saveCart(items.value)
        }
    }

    const deleteFromCart = (pet: PetItem) => {
       if (items.value.some((ci) => ci.good.id === pet.id)) {
            const item = items.value.find((ci) => ci.good.id === pet.id)
            if (item) {
                items.value = items.value.filter((ct) => ct.good.id !== pet.id)
            }
            saveCart(items.value)
        } 
    }

    const clearCart = () => {
        items.value = []
        saveCart(items.value)
    }

    const loadCartFormLc = () => {
        items.value = loadCart()
    }

    return { addToCart, removeFromCart, clearCart, items, loadCartFormLc, itemsCount, deleteFromCart }
})
