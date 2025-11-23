export interface FilterTypes {
    type: FilterType
    levels?: string[] 
    rarities?: string[]
    properties?: { missing: boolean, flyable: boolean, rideable: boolean }
}

export type FilterType = 'transport' | 'pet' | 'egg' | 'potion'

export interface Filter {
    name?: string
    price?: { min?: number, max?: number }
    types: FilterTypes[]
}