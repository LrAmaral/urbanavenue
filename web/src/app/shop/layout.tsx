import { Nav } from '@/components/Nav'
import { ReactNode } from 'react'

export const metadata = {
  title: 'UrbanAvenue® | shop',
  description: 'Shop',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  )
}
