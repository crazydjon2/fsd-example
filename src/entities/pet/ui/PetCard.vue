<template>
  <div class="card">
    <div v-if="pet.rare" class="rarity"
      :style="{ background: rarityColors[pet.rare] ? rarityColors[pet.rare] : rarityColors.default }" />
    <div>
      <img :src="pet.imageUri" />
    </div>
    <div class="properties">
      <div v-for="p in properties" :key="p.name" :style="{ background: p.color }" :class="p.circle ? 'rounded' : ''">{{
        p.name }}</div>
    </div>
    <div class="wrapper">
      <!-- <p class="age">{{ pet.age }}</p> -->
      <p class="name">{{ pet.name }}</p>
      <p class="price">{{ pet.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { rarityColors, type PetItem } from '../model/types';
import getPropertiesStyle from '../utils/get-pet-propery-style';

const props = defineProps<{ pet: PetItem }>()

const properties = computed(() => getPropertiesStyle(props.pet))
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

  & img {
    max-height: 78px;
  }

  &:hover {
    box-shadow: 0px 0px 18px #00000026
  }
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