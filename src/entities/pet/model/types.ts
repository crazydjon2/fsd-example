export type PetType = 'pet' | string
export type PetAge = 'newborn' | 'pre_teen' | 'teen' | 'post_teen' | 'full_grown' | string
export type PetRarity = 'ultra_rare' | 'uncommon' | 'common' | 'rare' | 'legendary' | string
export type PetPumping = 'default' | string
export type Currency = 'usd' | string

export interface PetItem {
  id: number
  goodId: string
  name: string
  type: PetType
  realName: string
  imageId: string
  imageUri: string
  subtype: string | null
  age: PetAge
  rare: PetRarity
  pumping: PetPumping
  flyable: boolean
  rideable: boolean
  price: number
  avgPrice: number
}

export interface PetsApiResponse {
  status: boolean
  items: PetItem[]
  count: number
  currency: Currency
  _source: number
}

export const rarityColors: Record<PetRarity, string> = {
  common: '#4891FF',
  uncommon: '#7E10D4',
  rare: '#40BB18CC',
  'ultra_rare': '#E51A2ECC',
  legendary: '#1E1E1E',
  default: 'white'
}