<template>
    <div class="aside" :class="{ open: isOpen || isMenu }">
        <aside>
            <!-- <div id="aside-content" /> -->
            <NavigationAside v-if="isMenu" />
            <FilterRender v-else />
            <div class="footer">
                © 2020-2023 STARPETS.GG All Rights Reserved
            </div>
        </aside>
    </div>
    <transition>
        <div v-if="isOpen || isMenu" @click="close(); closeMenu()" class="overlay" />
    </transition>
</template>

<script lang="ts" setup>
import { useAsideStore } from '@features/toogle-aside';
import { FilterRender } from '@features/market-filters';
import { NavigationAside } from '@features/navigation';

const { isOpen, isMenu } = storeToRefs(useAsideStore())
const { close, closeMenu } = useAsideStore()
</script>

<style scoped lang="scss">
.aside {
    background: var(--alias-modal-background-primary);
    gap: 24px;
    max-height: calc(100vh - 82px - 40px);
    overflow: auto;
    max-width: 308px;
    padding: 20px;
    position: -webkit-sticky;
    position: sticky;
    top: 82px;
    width: 100%;
    z-index: 401;

    & aside {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    @include desktop {
        position: fixed;
        height: 100%;
        background-color: white;

        transform: translateX(-348px);
        transition: 0.3s;

        &.open {
            transform: translateX(0);
        }
    }
}

.overlay {
    position: fixed;
    z-index: 400;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.272);
}

.footer {
    margin-top: auto;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: bottom;

    text-align: center;
    color: #646464;
}
</style>