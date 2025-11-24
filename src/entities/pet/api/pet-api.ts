import { $api } from '@shared/api/client';
import type { PetsApiResponse } from '../model/types';

export const petApi = {
  getPets: (filters?: any, page = 1, limit = 12, currency = 'usd') => {
    return $api<PetsApiResponse>('/api/store/items/all', {
      method: 'POST',
      body: {
        "page": page,
        currency,
        "amount": limit,
        "filter": filters,
        "sort": { "price": "desc" }
      }
    })
  },
}