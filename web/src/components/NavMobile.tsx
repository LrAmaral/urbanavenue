import { ShoppingCart, User } from '@phosphor-icons/react'
import Link from 'next/link'

export default function NavMobile() {
  return (
    <div className="w-full bg-white font-alt lg:hidden">
      <div className="flex flex-col items-end justify-center gap-2">
        <Link className="transition-colors hover:text-zinc-700" href="/shop">
          shop
        </Link>
        <Link href="/home">
          <User size={24} />
        </Link>
        <Link className="flex flex-row" href="/shop/cart">
          <ShoppingCart size={26} />0
        </Link>
      </div>
    </div>
  )
}
