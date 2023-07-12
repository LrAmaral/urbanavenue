import { Footer } from '@/components/Layout/Footer'
import { Nav } from '@/components/Layout/Nav'
import { ReactNode } from 'react'

export const metadata = {
  title: 'shop | UrbanAvenue®',
  description: 'Shop',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  )
}
