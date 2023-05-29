'use client'

import { Copyright, EnvelopeSimple } from '@phosphor-icons/react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex w-full border-t border-slate-300 text-black xs:h-auto xs:flex-col xs:items-center xs:justify-center xs:gap-6 lg:h-48 lg:flex-col lg:items-center lg:justify-around">
      <div className="grid xs:grid-cols-1 xs:justify-items-center xs:gap-4 md:w-5/6 md:grid-cols-2 md:justify-items-center lg:w-full lg:grid-cols-2 lg:justify-items-center lg:gap-0">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl">UrbanAvenue</h1>
          <p className="mb-2 font-alt">
            Streetwear shop online: style meets comfort.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            className="flex flex-row items-center justify-center gap-1 font-bold hover:text-zinc-700"
            href="mailto: amaralrdev@gmail.com"
            target="_blank"
          >
            <EnvelopeSimple size={28} />
            contato@urbanavenue.com.br
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center font-alt">
        <Copyright size={18} weight="regular" />
        UrbanAvenue
      </div>
    </div>
  )
}
