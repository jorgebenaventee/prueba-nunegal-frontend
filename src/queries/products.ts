import { queryOptions } from '@tanstack/react-query'
import { fetchProduct, fetchProducts } from '@/api/products.ts'
import type { Product } from '@/schemas/product.ts'

export const productQueries = {
  list: () =>
    queryOptions({
      queryKey: ['products'],
      queryFn: fetchProducts
    }),
  get: (id: Product['id']) =>
    queryOptions({
      queryKey: ['product', id],
      queryFn: () => fetchProduct(id)
    })
}
