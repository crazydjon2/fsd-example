<template>
  <div class="checkbox-item">
    <label class="checkbox-label">
      <input type="checkbox" v-model="selected" :value="value" class="checkbox" />
      <div class="wrapper">
        <span v-if="icon" class="icon" :style="{ backgroundColor: color }">
          {{ icon }}
        </span>
        <span class="text">{{ label }}</span>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
  color?: string
  label?: string
  value: any
}>()

const selected = defineModel()
</script>

<style scoped>
.properties {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
}

.title {
  font-weight: bold;
  margin-bottom: 12px;
}

.checkbox-item {
  margin-bottom: 8px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
}

.wrapper {
  background: #f8f8f8;
  border-radius: 8px;
  width: 100%;
  padding: 8px 12px;
}

.checkbox {
  width: 24px;
height: 24px;
angle: 0 deg;
opacity: 1;
border-radius: 6px;
background-color: #FAFAFA;
border: none;

}

.text {
  font-family: Inter;
font-weight: 500;
font-style: Medium;
font-size: 16px;
leading-trim: NONE;
line-height: 150%;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
margin-left: 8px;
color: #646464
}
</style>
