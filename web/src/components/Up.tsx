'use client'

import { ArrowUp } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

function Up() {
  return (
    <div>
      <Link
        href={'#main'}
        className="flex flex-row items-center justify-center gap-1 xs:mb-12 lg:mb-0"
      >
        Back to the top <ArrowUp size={26} />
      </Link>
    </div>
  )
}

export default Up
