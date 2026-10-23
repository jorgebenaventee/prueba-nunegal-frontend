import type { ProductDetail } from '@/schemas/product.ts'
import { formatPrice } from '@/lib/utils.ts'

export function ProductDetails({ product }: { product: ProductDetail }) {
  const cameras = [
    ...(product.primaryCamera ?? []),
    ...(product.secondaryCmera ?? [])
  ].filter(v => v.includes('MP'))
  const specs = [
    ['CPU', product.cpu],
    ['RAM', product.ram],
    ['Sistema operativo', product.os],
    ['Resolución de pantalla', product.displaySize],
    ['Batería', product.battery],
    ['Cámaras', cameras.join(' + ')],
    ['Dimensiones', product.dimentions],
    ['Peso', `${product.weight}g`]
  ].filter(([, value]) => value)
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-light">
        {product.fullName}
      </h1>
      <p>
        {product.price != null ? formatPrice(product.price) : 'No disponible'}
      </p>
      <dl>
        {specs.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-8">
            <dt className="text-muted-foreground">{label}:</dt>
            <dt className="text-right">{value}</dt>
          </div>
        ))}
      </dl>
    </>
  )
}
