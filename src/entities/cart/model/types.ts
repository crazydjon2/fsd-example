import type { PetItem } from "@entities/pet/model/types";

export interface CartItem {
    count: number;
    good: PetItem
}