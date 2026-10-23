import { API_URL } from '@/constants.ts'
import {
  type Product,
  productListSchema,
  productSchema
} from '@/schemas/product.ts'

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
  return productSchema.parse(await res.json())
}
