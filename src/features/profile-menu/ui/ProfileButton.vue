<template>
  <div class="user-profile">
    <!-- Название проекта и ссылка "Профиль" -->
    <div class="user-info">
      <div class="project-name">{{ user.name }}</div>
      <div class="profile-link">Профиль</div>
    </div>

    <!-- Аватар с fallback на первую букву -->
    <div class="avatar-wrapper">
      <img
        v-if="user.avatar"
        :src="user.avatar"
        alt="Avatar"
        class="avatar-img"
      />
      <div
        v-else
        class="avatar-fallback"
        :style="{ background: gradient }"
      >
        {{ user.name[0] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@entities/user';

const { user } = storeToRefs(useUserStore())

// Красивый случайный градиент (можно задать свои цвета)
const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
]
const gradient = computed(() => {
  // Хэш от имени → один и тот же цвет для одного пользователя
  let hash = 0
  for (let i = 0; i < user.value.name.length; i++)
    hash = user.value.name.charCodeAt(i) + ((hash << 5) - hash)

  const index = Math.abs(hash) % gradients.length
  return gradients[index]
})
</script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  cursor: pointer;
}

.user-info {
  flex: 1;
}

.project-name {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.2;
}

.profile-link {
  font-size: 14px;
  color: #64748b;
  margin-top: 2px;
}

.avatar-wrapper {
  position: relative;
  max-width: 72px;
  max-height: 72px;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fbbf24; /* оранжевая обводка как на скриншоте */
  box-sizing: border-box;
}

.avatar-fallback {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #fbbf24;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
</style>