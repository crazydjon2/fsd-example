// shared/api/client.ts
export const $api = $fetch.create({
  baseURL: 'https://market.apineural.com',
  async onRequest({ options }) {
    // Добавляем заголовки, токены и т.д.
    const token = useCookie('token')
    if (token.value) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token.value}`
      }
    }
  },
  async onResponseError({ response }) {
    // Обработка ошибок
    console.error('API Error:', response.status, response.statusText)
  }
})