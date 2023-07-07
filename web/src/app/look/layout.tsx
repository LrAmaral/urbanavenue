import { ReactNode } from 'react'

export const metadata = {
  title: 'UrbanAvenue® | lookbook',
  description: 'Lookbook',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
