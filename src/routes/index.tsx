import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { productQueries } from '@/queries/products.ts'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useDebouncedValue } from '@/hooks/useDebouncedValues.ts'
import { ProductCard } from '@/components/ProductCard.tsx'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  const { data: products, isPending, error } = useQuery(productQueries.list())
  const [filterQuery, setFilterQuery] = useState('')
  // const filterTerm = filterQuery.toLowerCase()
  const filterTerm = useDebouncedValue(filterQuery.toLowerCase(), 350)

  if (isPending) return <p>Cargando productos…</p>
  if (error) return <p>Error: {error.message}</p>

  const filteredProducts = products.filter(product =>
    product.fullName.toLowerCase().includes(filterTerm)
  )

  return (
    <>
      <Input
        className="mr-0 block ml-auto max-w-72"
        placeholder="Buscar productos..."
        value={filterQuery}
        onChange={e => setFilterQuery(e.target.value)}
      />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <Link to="/product" search={{ id: product.id }} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  )
}
