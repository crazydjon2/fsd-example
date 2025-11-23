import { $api } from '@shared/api/client';
import type { PetsApiResponse } from '../model/types';

export const petApi = {
  getPets: (filters?: any, page = 1, limit = 12) => {
    return $api<PetsApiResponse>('/api/store/items/all', {
      method: 'POST',
      body: {
        "page": page,
        "currency": "usd",
        "amount": limit,
        "filter": filters,
        "sort": { "price": "desc" }
      }
    })
  },
}