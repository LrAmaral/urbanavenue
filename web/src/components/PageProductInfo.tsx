'use client'

import Link from 'next/link'
import SizeSelection from './SizeSelection'
import { PageProductProps } from '@/@types/pageProduct'

function PageProductInfo({ id, title, price, stock }: PageProductProps) {
  return (
    <div
      key={id}
      className="flex w-full flex-col justify-center gap-4 xs:items-center lg:items-start"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl">$ {price}</p>
      <p className="text-xl text-lime-500">{stock} in stock</p>

      <div className="flex justify-center gap-2 xs:flex-row lg:flex-row">
        <Link
          type="button"
          href="/shop/cart"
          className="flex flex-row items-center justify-center bg-zinc-900 p-2 text-center text-white "
        >
          <p className="">Add to cart</p>
        </Link>
        <Link
          type="button"
          href="#"
          className="flex items-center justify-center bg-zinc-900 p-2 text-white"
        >
          Buy
        </Link>
      </div>
      <SizeSelection />
    </div>
  )
}

export default PageProductInfo
