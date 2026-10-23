import type { ProductDetail } from '@/schemas/product.ts'
import { type ComponentProps, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useMutation } from '@tanstack/react-query'
import { productMutations } from '@/mutations/products.ts'
import { useCart } from '@/store/cart.ts'

export function AddToCartForm({
  id,
  options,
  ...props
}: ComponentProps<'form'> & {
  id: ProductDetail['id']
  options: ProductDetail['options']
}) {
  const [colorCode, setColorCode] = useState(options.colors[0]?.code)
  const [storageCode, setStorageCode] = useState(options.storages[0]?.code)
  const setCartItems = useCart(state => state.setItems)
  const {
    isSuccess,
    isError,
    isPending,
    mutate: addToCart
  } = useMutation({
    ...productMutations.addToCart,
    onSuccess: ({ count }) => setCartItems(count)
  })
  const valid = colorCode !== null && storageCode !== null

  const colorItems = options.colors.map(({ code, name }) => ({
    label: name,
    value: code
  }))
  const storageItems = options.storages.map(({ code, name }) => ({
    label: name,
    value: code
  }))
  return (
    <form
      className="flex flex-col gap-4 w-full mt-8"
      onSubmit={e => {
        e.preventDefault()
        addToCart({ id, colorCode, storageCode })
      }}
      {...props}
    >
      <Select
        items={colorItems}
        value={colorCode}
        onValueChange={value => setColorCode(value!)}
      >
        <Label>Selecciona el color</Label>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Color"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {colorItems.map(item => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={storageCode}
        onValueChange={value => setStorageCode(value!)}
        items={storageItems}
      >
        <Label>Selecciona la capacidad de almacenamiento</Label>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Almacenamiento"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {storageItems.map(item => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit" disabled={!valid || isPending}>
        {isSuccess ? (
          <span className="text-green-700">Añadido correctamente</span>
        ) : isError ? (
          <span className="text-red-700">
            Ha ocurrido un error al añadir el producto
          </span>
        ) : isPending ? (
          <span>Añadiendo...</span>
        ) : (
          <span>Añadir al carrito</span>
        )}
      </Button>
    </form>
  )
}
