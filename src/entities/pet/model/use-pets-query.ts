import { useInfiniteQuery } from '@tanstack/vue-query'
import { petApi } from '../api/pet-api'

const PAGE_SIZE = 72

export const usePetsQuery = (filters?: Ref<any>, currency?: Ref<string>) => {
  const queryKey = computed(() => ['pets', filters?.value, currency?.value] as const)
  return useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 1 }) => {
      return await petApi.getPets(filters?.value, pageParam, PAGE_SIZE, currency?.value)
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.flatMap(p => p.items).length
      const totalAvailable = lastPage.count

      if (totalFetched >= totalAvailable) return undefined

      return allPages.length + 1
    },

    initialPageParam: 1,
    // TODO DISABLE FOR PROD
    staleTime: 0,
  })
}