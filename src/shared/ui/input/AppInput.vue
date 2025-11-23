<template>
  <div class="input" :class="white && 'white'">
    <slot name="prepend"/>
    <input v-model="model" :type :placeholder />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'number' | 'init'
  placeholder?: string
  white?: boolean
}>()
const model = defineModel()
</script>

<style scoped lang="scss">
.input {
  padding: 9px 10px;


  background: $light-grey;
  border: 2px solid $light-grey;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-family: var(--font-families-inter);
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium-16px-regular-font-weight);
  gap: 12px;
  letter-spacing: var(--medium-16px-regular-letter-spacing);
  line-height: var(--medium-16px-regular-line-height);
  position: relative;
  text-decoration: none;
  transition: all .1s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  white-space: nowrap;

  &.white {
    background: white;
    border: 2px solid #F6F6F6;
  }

  & input {
    background: transparent;
    border: 0;
    color: #212121;
    font-family: inherit;
    font-size: inherit;
    font-style: normal;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    max-width: 100%;
    outline: none;
    text-decoration: none;
    transition: all .1s ease-in-out;
    white-space: nowrap;
    width: 100%;
    &::placeholder {
      color: #C8C8C8;
    }
  }
}
</style>