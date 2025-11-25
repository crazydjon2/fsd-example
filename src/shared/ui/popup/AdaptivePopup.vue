<template>
    <ClientOnly>
        <!-- Desktop: dropdown -->
        <VDropdown v-if="!isMobile" :distance="distance" strategy="fixed">
            <slot name="trigger" />
            <template #popper>
                <slot />
            </template>
        </VDropdown>

        <!-- Mobile: modal -->
        <div v-else>
            <div @click="open = true">
                <slot name="trigger" />
            </div>

            <transition>
                <Teleport to="body">
                    <div v-if="open" class="modal-content">
                        <div class="header">
                            <p>{{ title }}</p>
                            <AppButton class="icon">
                                <Icon @click="close" name="material-symbols:close" style="color: black" />
                            </AppButton>
                        </div>
                        <slot />
                    </div>
                </Teleport>
            </transition>
        </div>
    </ClientOnly>
</template>

<script setup>
import { useIsLaptop } from '@shared/lib/useMediaQuery'
import { AppButton } from '..'

const props = defineProps({
    distance: { type: Number, default: 6 },
    title: { type: String }
})

const open = ref(false)
const isMobile = useIsLaptop()

function close() {
    open.value = false
}
</script>

<style scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 200;
    background: white;
    display: flex;
    align-items: center;
    max-width: calc(100% - 40px);
}

.icon {
    margin-left: auto;
}

.modal-content {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    min-height: 100vh;
    background: white;
    max-height: 80vh;
    overflow: auto;
    border-radius: 16px 16px 0 0;
    padding: 16px;
}
</style>
