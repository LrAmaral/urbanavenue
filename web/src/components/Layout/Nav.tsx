'use client'

import Link from 'next/link'
import { List, ShoppingCart, User, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  return (
    <div
      id="nav"
      className="absolute left-0 top-0 w-full bg-white p-4 text-black"
    >
      <nav className="h-10 items-center justify-around md:flex">
        <div className="flex cursor-pointer items-center justify-between">
          <Link href="/" className="xs:text-3xl lg:text-4xl">
            <h1 className="w-fit font-sans">UrbanAvenue</h1>
          </Link>
          <div className="block cursor-pointer text-3xl md:hidden">
            <button title="button" onClick={() => setMenuOpen((prev) => !prev)}>
              {menuOpen ? <X size={36} /> : <List size={36} />}
            </button>
          </div>
        </div>

        <div
          className={`absolute left-0 w-full bg-white pb-12 pl-9 font-alt transition-all duration-500 ease-in xs:shadow md:static md:flex md:w-auto md:items-center md:pb-0 md:pl-0 md:shadow-none ${
            menuOpen ? 'top-16 h-screen' : 'top-[-490px]'
          }`}
        >
          <Link
            className="mx-2 my-8 flex items-center justify-center transition-colors duration-500 hover:text-zinc-400 xs:text-2xl md:my-0 md:text-base"
            href="/shop"
          >
            shop
          </Link>
          <Link
            className="mx-2  my-8 flex items-center justify-center transition-colors duration-500 hover:text-zinc-400 xs:text-2xl md:my-0 md:text-base"
            href="/look"
          >
            lookbook
          </Link>
          <Link
            className="mx-2  my-8 flex items-center justify-center transition-colors duration-500 hover:text-zinc-400 xs:text-2xl md:my-0 md:text-base"
            href="/home/contact"
          >
            contact
          </Link>
          <Link
            href="/home/login"
            className="mx-2  my-8 flex items-center justify-center transition-colors duration-500 hover:text-zinc-400 xs:text-2xl md:my-0 md:text-base"
          >
            {menuOpen ? <User size={36} /> : <User size={24} />}
          </Link>
          <Link
            className="mx-2  my-8 flex items-center justify-center transition-colors duration-500 hover:text-zinc-400 xs:text-2xl md:my-0 md:text-base"
            href="/shop/cart"
          >
            {menuOpen ? <ShoppingCart size={36} /> : <ShoppingCart size={25} />}
          </Link>
        </div>
      </nav>
    </div>
  )
}
