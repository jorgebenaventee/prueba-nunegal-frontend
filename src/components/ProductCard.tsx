import type { Product } from '@/schemas/product.ts'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card.tsx'

const intl = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
})
function formatPrice(price: number) {
  return intl.format(price)
}

export function ProductCard({
  product,
  ...props
}: React.ComponentProps<'div'> & {
  product: Product
}) {
  return (
    <Card {...props}>
      <img
        src={product.imgUrl}
        alt={`Imagen del producto ${product.fullName}`}
        className="max-h-full max-w-32 mx-auto block object-cover aspect-[127/169]"
      />
      <CardHeader>
        <CardTitle className="line-clamp-2">{product.fullName}</CardTitle>
        <CardDescription>
          {product.price != null
            ? formatPrice(product.price)
            : 'Consultar precio'}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
