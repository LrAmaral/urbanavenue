import { Footer } from '@/components/Layout/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'lookbook | UrbanAvenue®',
  description: 'Lookbook',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  )
}
