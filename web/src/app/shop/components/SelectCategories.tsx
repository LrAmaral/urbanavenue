import Link from 'next/link'

export default function SelectCategories() {
  return (
    <div
      className="flex w-full flex-row items-center justify-center gap-6 font-alt text-xl
  "
    >
      <Link href={'/shop/products/tshirt'}>t-shirts</Link>~
      <Link href={'/shop/products/cap'}>caps</Link>~
      <Link href={'/shop/products/shoe'}>shoes</Link>
    </div>
  )
}
