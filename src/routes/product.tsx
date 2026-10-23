import { createFileRoute, Link } from '@tanstack/react-router'
import z from 'zod'
import { useSuspenseQuery } from '@tanstack/react-query'
import { productQueries } from '@/queries/products.ts'
import { ProductDetails } from '@/components/ProductDetails.tsx'
import { buttonVariants } from '@/components/ui/button.tsx'
import { AddToCartForm } from '@/components/AddToCartForm.tsx'

const productSearchSchema = z.object({
  id: z.string()
})

export const Route = createFileRoute('/product')({
  component: RouteComponent,
  validateSearch: productSearchSchema
})

function RouteComponent() {
  const { id } = Route.useSearch()
  const { data: product, error } = useSuspenseQuery(productQueries.get(id))

  if (error) {
    return <p>Error: {error.message}</p>
  }
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 size-full lg:place-content-center">
      <div>
        <Link
          className={`ml-4 ${buttonVariants({ variant: 'secondary', size: 'default' })}`}
          to="/"
        >
          Volver
        </Link>
        <img
          style={{ viewTransitionName: `product-image-${product.id}` }}
          className="block mx-auto mt-4"
          alt={`Imagen de ${product.fullName}`}
          src={product.imgUrl}
        />
      </div>
      <div>
        <ProductDetails product={product} />
        <AddToCartForm
          id={product.id}
          options={product.options}
        ></AddToCartForm>
      </div>
    </div>
  )
}
