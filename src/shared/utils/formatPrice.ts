export function formatPrice(price:number, user: { balance: number, currency: string, language: string }) {
    if (price) {
    return `${price.toLocaleString(user.language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${getCurrencySign(user.currency)}`
}
return ''
}

export function getCurrencySign(currency: string) {
    switch (currency) {
        case 'usd':
            return '$'
        case 'eur':
            return '€'
        case 'rub':
            return '₽'
    }
}

