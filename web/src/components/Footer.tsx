'use client'

import { EnvelopeSimple } from '@phosphor-icons/react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex w-full text-black xs:h-auto xs:flex-col xs:items-center xs:justify-center xs:gap-6 lg:h-48 lg:flex-col lg:items-center lg:justify-around">
      <div className="flex w-full items-center justify-around gap-8 xs:flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">UrbanAvenue</h1>
          <p className="mb-2 font-alt">
            Streetwear shop online: style meets comfort.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 font-alt xs:mb-10 lg:mb-0">
          <Link
            href={'mailto: amaralrdev@gmail.com'}
            target="_blank"
            className="flex items-center justify-center gap-1 font-bold"
          >
            <EnvelopeSimple size={24} />
            contact@urbanavenue.com.br
          </Link>
        </div>
      </div>
    </div>
  )
}
