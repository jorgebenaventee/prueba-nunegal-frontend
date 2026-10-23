export { cn } from 'cn'
const intl = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
})
export function formatPrice(price: number) {
  return intl.format(price)
}
