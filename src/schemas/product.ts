import { z } from 'zod'

export const productSchema = z
  .object({
    id: z.string().min(1),
    brand: z.string().min(1),
    model: z.string().min(1),
    price: z
      .string()
      .transform(value => (value === '' ? null : Number(value)))
      .pipe(z.number().nonnegative().nullable()),
    imgUrl: z.url()
  })
  .transform(product => ({
    ...product,
    fullName: `${product.brand} ${product.model}`
  }))

export type Product = z.infer<typeof productSchema>

export const productListSchema = z.array(productSchema)
