import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(false)

  let media: MediaQueryList

  const update = () => {
    matches.value = media.matches
  }

  onMounted(() => {
    media = window.matchMedia(query)
    media.addEventListener('change', update)
    update()
  })

  onUnmounted(() => {
    media.removeEventListener('change', update)
  })

  return matches
}
