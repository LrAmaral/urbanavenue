import { ReactNode } from 'react'
import DashNav from './components/DashNav'
import AdmNav from './components/AdmNav'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative font-alt">
      <AdmNav />
      <DashNav />
      {children}
    </div>
  )
}
