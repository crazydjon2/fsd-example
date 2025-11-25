<template>
  <VDropdown
    :triggers="['click']"
    :shown="open"
    :auto-hide="true"
    :distance="8"
    :skidding="0"
    placement="bottom-end"
    theme="lang-dropdown"
  >
    <!-- Триггер (кнопка с текущим флагом) -->
    <button v-if="currentLang" class="lang-trigger" @click="open = !open">
      <img :src="currentFlag" alt="Flag" class="flag" />
    </button>

    <!-- Содержимое выпадашки -->
    <template #popper>
      <div class="lang-menu">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="lang-item"
          :class="{ active: lang.code === currentLang }"
          @click="select(lang.code)"
        >
          <img :src="lang.flag" alt="" class="flag" />
          <span>{{ lang.name }}</span>
        </button>
      </div>
    </template>
  </VDropdown>
</template>

<script setup lang="ts">
import { useUserStore } from '@entities/user'
import { useI18n } from '.nuxt/imports'

const { changeLanguage } = useUserStore()
const { user } = storeToRefs(useUserStore())
const { setLocale } = useI18n()
const open = ref(false)

const languages = [
  { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/48x36/ru.png' },
  { code: 'en', name: 'English',  flag: 'https://flagcdn.com/48x36/us.png' },
] as const

const currentLang = ref<'ru' | 'en'>()

const currentFlag = computed(() =>
  languages.find(l => l.code === currentLang.value)?.flag
)

const select = async (code: 'ru' | 'en') => {
  currentLang.value = code
  open.value = false
  changeLanguage(code)
}

watchEffect(async () => {
  if (user.value.language) {
    console.log(user.value.language)
    currentLang.value = user.value.language as ('ru' | 'en')
    await setLocale(user.value.language as ('ru' | 'en'))
  }
})
</script>

<style scoped>
.lang-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-trigger:hover {
  border-color: #94a3b8;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.flag {
  width: 28px;
  height: 21px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.chevron {
  font-size: 18px;
  color: #64748b;
  transition: transform 0.25s;
}

.chevron.open {
  transform: rotate(180deg);
}

/* Стили темы floating-vue */
:deep(.lang-dropdown) {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border: none;
  overflow: hidden;
  min-width: 180px;
}

.lang-menu {
  padding: 8px 0;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 16px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #1e293b;
  transition: background 0.15s;
}

.lang-item:hover {
  background: #f8fafc;
}

.lang-item.active {
  background: #f1f5f9;
  font-weight: 600;
}

.check {
  margin-left: auto;
  font-size: 20px;
  color: #10b981;
}
</style>