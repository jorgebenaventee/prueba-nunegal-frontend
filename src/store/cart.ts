import { create } from 'zustand'
interface CartState {
  items: number
  setItems: (newItems: number) => void
}
export const useCart = create<CartState>(set => ({
  items: 0,
  setItems: (newItems: number) => set({ items: newItems })
}))
