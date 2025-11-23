<template>
  <div class="skeleton-card"></div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.skeleton-card {
  width: 100%;
  height: 100%;
  background: #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.skeleton-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 2s infinite;
  transform: skewX(-20deg);
}

@keyframes shimmer {
  0%   { left: -150%; }
  100% { left: 150%; }
}
</style>