import { API_URL } from '@/constants.ts'
import {
  type Product,
  productDetailSchema,
  productListSchema
} from '@/schemas/product.ts'
import z from 'zod'

export async function fetchProducts() {
  const res = await fetch(`${API_URL}/api/product`)
  if (!res.ok) {
    throw new Error(
      `Could not fetch products. Error: ${res.status} ${res.statusText}`
    )
  }
  return productListSchema.parse(await res.json())
}

export async function fetchProduct(id: Product['id']) {
  const res = await fetch(`${API_URL}/api/product/${id}`)
  if (!res.ok) {
    throw new Error(
      `Could not fetch product with id ${id}. Error: ${res.status} ${res.statusText}`
    )
  }
  return productDetailSchema.parse(await res.json())
}

const addToCartResponseSchema = z.object({
  count: z.number()
})

export async function addToCart(
  id: Product['id'],
  colorCode: number,
  storageCode: number
) {
  const res = await fetch(`${API_URL}/api/cart`, {
    body: JSON.stringify({ id, colorCode, storageCode }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  })
  if (!res.ok) {
    throw new Error(
      `Could not add product ${id} to cart. Error: ${res.status} ${res.statusText}`
    )
  }

  return addToCartResponseSchema.parse(await res.json())
}
