import type { PetItem } from "../model/types";

export default function getPropertiesStyle(pet: PetItem) {
    const result = []
    if (pet.pumping) {
        if (pet.pumping.includes('mega_neon')) {
            result.push({
                color: '#7E10D4',
                circle: false,
                name: 'M'
            })
        } else if (pet.pumping.includes('neon')) {
            result.push({
                color: '#40BB18',
                circle: true,
                name: 'N'
            })
        }
    }
     if (pet.flyable) {
        result.push({
            color: '#108ED4',
            circle: true,
            name: 'F'
        })
    }
    if (pet.rideable) {
        result.push({
            color: '#D41057',
            circle: true,
            name: 'R'
        })
    }
    return result
}