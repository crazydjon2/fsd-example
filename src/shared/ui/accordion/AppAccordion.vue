<template>
    <div class="base-accordion">
        <!-- Заголовок -->
        <button class="accordion-header" @click="isOpen = !isOpen" type="button" :aria-expanded="isOpen"
            :aria-controls="`accordion-panel-${uid}`">
            <slot name="title">
                <span class="header-title">Фильтр</span>
            </slot>

            <div class="chevron" :class="{ 'rotated': isOpen }">
                <Icon name="material-symbols:chevron-right-rounded" />
            </div>
        </button>

        <!-- Анимируемый контент -->
        <Transition name="slide-fade" @enter="onEnter" @leave="onLeave">
            <div v-show="isOpen" :id="`accordion-panel-${uid}`" class="accordion-content" role="region">
                <div class="content-inner">
                    <slot />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Уникальный ID для доступности
const uid = Math.random().toString(36).slice(2, 9)

const isOpen = ref(true)

// Плавная анимация высоты + opacity
const onEnter = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = '0'
    element.style.opacity = '0'
    requestAnimationFrame(() => {
        element.style.height = `${element.scrollHeight}px`
        element.style.opacity = '1'
    })
}

const onLeave = (el: Element) => {
    const element = el as HTMLElement
    element.style.height = `${element.scrollHeight}px`
    element.style.opacity = '1'
    requestAnimationFrame(() => {
        element.style.height = '0'
        element.style.opacity = '0'
    })
}
</script>

<style scoped lang="scss">
.base-accordion {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background: white;
}

.accordion-header {
    width: 100%;
    padding: 14px 20px;
    padding-left: 0;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    cursor: pointer;
    background: white;

    font-weight: 600;
    font-style: SemiBold;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #B5B5B5;
}

.header-title {
    font-family: Gilroy;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0.1px;

}

.chevron {
    width: 18px;
    height: 18px;
    color: #6b7280;
    flex-shrink: 0;
    transition: transform 0.25s ease;
    transform: rotate(90deg);


    &.rotated {
        transform: rotate(-90deg);
    }
}

.accordion-content {
    overflow: hidden;
    transition: height 0.28s ease, opacity 0.28s ease;
}

.content-inner {
    padding: 8px 0;
}

/* Анимация */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.28s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    height: 0 !important;
    opacity: 0;
}
</style>