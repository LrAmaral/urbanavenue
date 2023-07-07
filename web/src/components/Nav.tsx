'use client'

import Link from 'next/link'
import { List, ShoppingCart, User, X } from '@phosphor-icons/react'
import { useState } from 'react'
import NavMobile from './NavMobile'

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white p-4 text-black">
      <div className="flex w-full p-2 xs:flex-row xs:items-center xs:justify-between xs:gap-0 lg:flex-row lg:items-center lg:justify-evenly lg:gap-[60vh]">
        <div className="flex items-center justify-center xs:flex-col xs:gap-1 lg:flex-row lg:gap-40 ">
          <Link href="/" className="font-sans xs:text-3xl lg:text-4xl">
            <h1 className="font-sans">UrbanAvenue</h1>
          </Link>
        </div>
        <div className="items-end justify-center gap-4 font-alt xs:hidden lg:flex lg:flex-row ">
          <Link className="transition-colors hover:text-zinc-400" href="/shop">
            shop
          </Link>
          <Link className="transition-colors hover:text-zinc-400" href="/look">
            lookbook
          </Link>
          <Link
            className="transition-colors hover:text-zinc-400"
            href="/home/contact"
          >
            contact
          </Link>
          <Link href="/home" className="transition-colors hover:text-zinc-400">
            <User size={24} />
          </Link>
          <Link
            className="flex flex-row transition-colors hover:text-zinc-400"
            href="/shop/cart"
          >
            <ShoppingCart size={26} />0
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button title="button" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={36} /> : <List size={36} />}
          </button>
        </div>
      </div>
      {menuOpen && <NavMobile />}
    </nav>
  )
}
