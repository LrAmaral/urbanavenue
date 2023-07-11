'use client'

import { Cookie } from '@phosphor-icons/react'
import React from 'react'

function Infos() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center">
      <Cookie size={36} />
      <p className="text-2xl">We use cookies.</p>
      <p className="items-center">
        This website uses cookies to ensure you get the best experience on our
        site.
      </p>
    </div>
  )
}

export default Infos
