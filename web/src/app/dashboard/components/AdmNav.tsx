'use client'

import { SignOut } from '@phosphor-icons/react'
import Link from 'next/link'

export default function AdmNav() {
  return (
    <div className="absolute right-4 top-4 flex w-full flex-row items-center justify-end gap-2">
      <h1>Hello, admin Lucas</h1>
      <Link href="/">
        <SignOut
          size={22}
          className="transition-all ease-in-out hover:scale-110"
        />
      </Link>
    </div>
  )
}
