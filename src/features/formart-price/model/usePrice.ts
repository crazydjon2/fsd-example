import { useUserStore } from '@entities/user'
import { formatPrice, getCurrencySign } from '@shared/utils/formatPrice'

export function usePriceFormatter() {
  const { user } = storeToRefs(useUserStore())

  const currencySign = computed(() => {
    return getCurrencySign(user.value.currency)
  })

  const format = (price: number) => {
    return formatPrice(price, user.value)
  }

  return { format, currencySign }
}