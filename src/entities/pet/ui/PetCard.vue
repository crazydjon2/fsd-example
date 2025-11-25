<template>
  <div class="card">
    <div v-if="pet.rare" class="rarity"
      :style="{ background: rarityColors[pet.rare] ? rarityColors[pet.rare] : rarityColors.default }" />
    <div>
      <NuxtImg loading="lazy" :modifiers="{ quality: 80 }" :src="pet.imageUri" class="img" />
    </div>
    <div class="properties">
      <PetProperties :pet />
    </div>
    <div class="wrapper">
      <!-- <p class="age">{{ pet.age }}</p> -->
      <p class="name">{{ pet.name }}</p>
      <p class="price">{{ price }}</p>
    </div>

    <div class="action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { rarityColors, type PetItem } from '../model/types';
import PetProperties from './PetProperties.vue';

defineProps<{ pet: PetItem, price: string }>()
</script>

<style scoped lang="scss">
.card {
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  border-radius: 16px;
  padding: 16px;
  padding-bottom: 8px;
  height: calc(100% - 20px);

  background: white;

  transition: 0.3s;

  & .img {
    max-height: 78px;
    min-height: 78px;
  }

  &:hover {
    box-shadow: 0px 0px 18px #00000026;

    & .action {
      display: flex;
    }
  }

  & .action {
    @include laptop {
      display: block !important;
    }
  }
}

.action {
  display: none;
  position: absolute;
  bottom: 8px;
  right: 8px;
}

.properties {
  position: absolute;
  right: 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  color: white;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 3px 4px;
    font-size: 14px;
    aspect-ratio: 1/1;

    &.rounded {
      border-radius: 50%;
    }
  }
}

.wrapper {
  margin-top: auto;
  text-align: start;
  width: 100%;

  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.age {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #646464;

}

.name {
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #212121;

}

.price {
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #212121;

}

.rarity {
  position: absolute;
  top: 0;
  width: 40px;
  height: 3px;
  border-radius: 0 0 16px 16px;

}
</style>