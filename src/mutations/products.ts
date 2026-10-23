import { mutationOptions } from '@tanstack/react-query'
import { addToCart } from '@/api/products.ts'
import type { ProductDetail } from '@/schemas/product.ts'

export const productMutations = {
  addToCart: mutationOptions({
    mutationFn: ({
      id,
      colorCode,
      storageCode
    }: {
      id: ProductDetail['id']
      colorCode: number
      storageCode: number
    }) => addToCart(id, colorCode, storageCode)
  })
}
