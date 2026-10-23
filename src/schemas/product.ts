import { z } from 'zod'

const productBaseSchema = z
  .object({
    id: z.string(),
    brand: z.string(),
    model: z.string(),
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
export const productListSchema = z.array(productBaseSchema)

export const productDetailSchema = productBaseSchema.and(
  z.object({
    cpu: z.string(),
    ram: z.string(),
    os: z.string(),
    displaySize: z.string(),
    battery: z.string(),
    primaryCamera: z
      .string()
      .or(z.array(z.string()))
      .transform(value => (Array.isArray(value) ? value : [value])),
    secondaryCmera: z
      .string()
      .or(z.array(z.string()))
      .transform(value => (Array.isArray(value) ? value : [value])),
    dimentions: z.string(),
    weight: z.string(),
    options: z.object({
      colors: z.array(
        z.object({
          code: z.number(),
          name: z.string()
        })
      ),
      storages: z.array(
        z.object({
          code: z.number(),
          name: z.string()
        })
      )
    })
  })
)

export type Product = z.infer<typeof productBaseSchema>
export type ProductDetail = z.infer<typeof productDetailSchema>
