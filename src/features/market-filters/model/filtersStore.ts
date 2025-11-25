import { debounce } from "@shared/utils/debounce"
import type { Filter, FilterType, FilterTypes } from "./types"

export const useFilterStore = defineStore('useFilterStore', () => {
  const filters = reactive<Filter>({
    types: []
  })
  const allTypes = ref<{ name: string, value: string }[]>([])
  const pickedTypes = ref<FilterType[]>([])
  const filterTypes = reactive<Record<string, unknown>>({})
  const priceData = reactive<{ min?: number | null, max?: number | null }>({
    min: null,
    max: null
  })
  const selectedProperties = ref<string[]>([])
  const name = ref()
  const minPrice = ref()
  const maxPrice = ref()
  const rarities = ref<string[]>([])

  const numberOfAppliedFilters = computed(() => {
    let count = 0
    if (name.value) {
      count++
    }
    if (minPrice.value) {
      count++
    }
    if (maxPrice.value) {
      count++
    }
    if (selectedProperties.value.length) {
      count = count + selectedProperties.value.length
    }
    if (pickedTypes.value.length) {
      count = count + pickedTypes.value.length
    }
    if (rarities.value.length) {
      count = count + rarities.value.length
    }
    return count
  })

  const setFilter = (key: keyof FilterTypes, value: string | string[]) => {
    if (value && value.length) {
      filterTypes[key] = value
    } else {
      delete filterTypes[key]
    }
  }

  const setProperties = (flyable: boolean, rideable: boolean) => {
    if (!flyable && !rideable) {
      if (filterTypes) {
        delete filterTypes.properties
        return
      }
    } else {
      filterTypes.properties = { missing: false, flyable, rideable }
    }
  }

  const resolveType = (type: FilterType) => {
    if (!pickedTypes.value?.includes(type)) {
      pickedTypes.value.push(type)
    } else {
      pickedTypes.value = pickedTypes.value.filter((t) => t !== type)
    }
  }

  const initFilter = (types: { name: string, value: string }[]) => {
    if (types) {
      allTypes.value = types
    }
    filters.types = allTypes.value.map((t) => {
      return {
        type: t.value as FilterType
      }
    })
  }

  function toggleRarity(value: string) {
    if (rarities.value.includes(value)) {
      rarities.value = rarities.value.filter(v => v !== value)
    } else {
      rarities.value.push(value)
    }

    // обновляем filters.types
    if (rarities.value.length) {
      filterTypes.rarities = rarities.value
    } else {
      delete filterTypes.rarities
    }
  }

const resetFilter = () => {
  // чистим массивы правильно (реактивно)
  rarities.value.splice(0)

  pickedTypes.value.splice(0)

  selectedProperties.value.splice(0)
  minPrice.value = null
  maxPrice.value = null

  name.value = ''

  // удаляем поля реактивного объекта, НЕ заменяем объект
  for (const key in filterTypes) {
    delete filterTypes[key]
  }

  // удаляем поля в filters
  delete filters.name
  delete filters.price
  filters.types = allTypes.value.map(t => ({ type: t.value  as FilterType}))
}

  watchEffect(() => {
    if (pickedTypes.value.length) {
      filters.types = pickedTypes.value.map((t) => {
        return {
          type: t,
          ...filterTypes
        }
      })
    } else {
      filters.types = allTypes.value.map((t) => {
        return {
          type: t.value,
          ...filterTypes
        } as FilterTypes
      })
    }
    filters.price = {}
    if (priceData.max) {
      filters.price.max = priceData.max
    } else {
      delete filters.price.max
    }
    if (priceData.min) {
      filters.price.min = priceData.min
    }
    else {
      delete filters.price.min
    }

    if (!filters.price.min && !filters.price.max) {
      delete filters.price
    }
  })

  const _setName = (n: string) => {
    name.value = n
    if (!name.value) {
      delete filters.name
    } else {
      filters.name = n
    }
  }

  const _setPrice = (price: number, max: boolean) => {
    if (max) {
      priceData.max = price
    } else {
      priceData.min = price
    }

    if (!priceData.max) {
      delete priceData.max
    }
    if (!priceData.min) {
      delete priceData.min
    }
  }

  const setName = debounce(_setName, 400)     // 400 мс — идеально для поиска
  const setPrice = debounce(_setPrice, 400)

  return { setFilter, filters, setProperties, allTypes, initFilter, resolveType, pickedTypes, filterTypes, setName, setPrice, resetFilter, toggleRarity, rarities, selectedProperties, name, minPrice, maxPrice, numberOfAppliedFilters }
})