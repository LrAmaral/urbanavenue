import { EnvelopeSimple } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Email() {
  const [emailText, setEmailText] = useState('')

  const handleEmailClick = () => {
    const defaultText = 'Olá, eu gostaria de entrar em contato porque'
    setEmailText(defaultText)
  }

  return (
    <section>
      <h2 className="text-xl font-bold">Contact</h2>
      <Link
        href={`mailto:amaralrdev@gmail.com?body=${encodeURIComponent(
          emailText,
        )}`}
        target="_blank"
        className="flex items-center justify-center gap-1 font-bold text-blue-600 hover:text-blue-800"
        onClick={handleEmailClick}
      >
        <EnvelopeSimple size={20} />
        contact@urbanavenue.com.br
      </Link>
    </section>
  )
}
