import type { Filter, FilterType, FilterTypes } from "./types"

export default defineStore('useFilterStore', () => {
  const filters = reactive<Filter>({
    types: []
  })
  const allTypes = ref<{ name: string, value: string }[]>([])
  const pickedTypes = ref<FilterType[]>([])
  const filterTypes = reactive<Record<string, unknown>>({})

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
    allTypes.value = types
    filters.types = allTypes.value.map((t) => {
      return {
        type: t.value as FilterType
      }
    })
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
  })

  const setName = (name: string) => {
    if (!name) {
      delete filters.name
    } else {
      filters.name = name
    }
  }

  return { setFilter, filters, setProperties, allTypes, initFilter, resolveType, pickedTypes, filterTypes, setName }
})