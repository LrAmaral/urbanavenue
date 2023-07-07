'use client'

import {
  ChartBar,
  ClockCounterClockwise,
  FolderOpen,
} from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

export default function DashNav() {
  return (
    <nav className="absolute flex w-full gap-6 xs:top-4 xs:flex-row xs:items-center xs:justify-center lg:left-10 lg:top-2/4 lg:flex-col lg:items-start">
      <Link href="/dashboard/last">
        <ChartBar
          size={36}
          className="transition-all ease-in-out hover:scale-110"
        />
      </Link>
      <Link href="/">
        <ClockCounterClockwise
          size={36}
          className="transition-all ease-in-out hover:scale-110"
        />
      </Link>
      <Link href="/dashboard/product">
        <FolderOpen
          size={36}
          className="transition-all ease-in-out hover:scale-110"
        />
      </Link>
    </nav>
  )
}
