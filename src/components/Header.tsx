import { ShoppingCartIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useCart } from '@/store/cart.ts'

export function Header() {
  const cartItems = useCart(state => state.items)
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950 shadow-lg shadow-zinc-950/40 mx-auto flex h-14 w-full items-center justify-between px-4">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-tight text-zinc-50">
          Core<span className="text-cyan-400">Lab</span>
        </span>
      </Link>
      <div className="relative">
        <ShoppingCartIcon className="text-white"></ShoppingCartIcon>
        <div className="rounded-full bg-cyan-600 text-white absolute -top-2 -right-2 size-5 grid place-content-center">
          {cartItems}
        </div>
      </div>
    </header>
  )
}
