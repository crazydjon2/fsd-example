<template>
    <div class="aside">
        <aside>
            <div id="aside-content" />
            <div class="footer">
                © 2020-2023 STARPETS.GG All Rights Reserved
            </div>
        </aside>
    </div>
</template>

<script lang="ts" setup></script>

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