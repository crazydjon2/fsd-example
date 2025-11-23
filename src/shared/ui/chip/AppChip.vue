<template>
    <button class="category-tab"  @click="emit('click')">
        <!-- Любой контент: иконка + текст, только иконка, бейдж и т.д. -->
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
})

const emit = defineEmits(['click'])
</script>

<style scoped>
.category-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 42px;
    padding: 0 20px;
    background: white;
    border: 1.5px solid #e2e5e9;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    color: #555;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    position: relative;
    user-select: none;
}

.category-tab:hover {
    background: #f8f9fb;
    border-color: #c5ceda;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.category-tab.active {
    background: #eef5ff;
    border-color: #3399ff;
    color: #3399ff;
    font-weight: 600;
    box-shadow: 0 0 0 3px rgba(51, 153, 255, 0.2),
        0 6px 16px rgba(51, 153, 255, 0.18);
}

.category-tab.large {
    height: 56px;
    font-size: 17px;
    border-radius: 28px;
    padding: 0 24px;
}
</style>