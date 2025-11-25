import { defineStore } from 'pinia'

export const useAsideStore = defineStore('aside', () => {
  const isOpen = ref(false)
  const isMenu = ref(false)

  const open = () => isOpen.value = true
  const close = () => isOpen.value = false
  const openMenu = () => isMenu.value = true
  const closeMenu = () => isMenu.value = false
  const toggle = () => {
    isOpen.value = !isOpen.value
    isMenu.value = false
  }
  const toggleMenu = () => {
    isMenu.value = !isMenu.value
    toggle()
  }

  return { isOpen, isMenu, open, close, toggle, toggleMenu, openMenu, closeMenu }
})
