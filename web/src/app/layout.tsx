import { ReactNode } from 'react'
import './globals.css'
import { Vollkorn, Kumbh_Sans as Kumbh } from '@next/font/google'

const vollkorn = Vollkorn({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
  variable: '--font-vollk',
})

const kumbhsans = Kumbh({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  variable: '--font-kumbh',
})

export const metadata = {
  title: 'UrbanAvenue®',
  description: 'Streetwear Online Store',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${vollkorn.variable} ${kumbhsans.variable} font-sans`}
    >
      <body
        className={`cursor-default select-none bg-white text-black scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300`}
      >
        {children}
      </body>
    </html>
  )
}
