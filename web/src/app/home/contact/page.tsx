'use client'

import Link from 'next/link'
import Email from '../components/Email'

export default function Contact() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 font-alt">
      <Link href="/" className="font-sans xs:text-3xl lg:text-4xl">
        <h1 className="font-sans">UrbanAvenue</h1>
      </Link>
      <div className="flex w-2/4 flex-col items-start gap-4 text-justify">
        <h2 className="text-2xl font-bold">Info & Contact</h2>
        <p>
          Privacy and Security: We value your privacy and take appropriate
          measures to protect your personal information. We use secure
          encryption technology to safeguard your sensitive data during online
          transactions. For more details, please refer to our Privacy Policy.
        </p>
        <p>
          We want you to be completely satisfied with your purchase. If for any
          reason you are not, please contact our customer service within 7 days
          of receiving your order. We will provide instructions for returns or
          exchanges based on our policies.
        </p>
        <Email />
      </div>
    </div>
  )
}
