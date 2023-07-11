'use client'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { User } from '@phosphor-icons/react'

export default function Profile(props: any) {
  return (
    <div className="flex h-auto flex-col items-center justify-center bg-white text-black">
      <Nav />
      <div className="relative mb-10 mt-10 flex h-screen flex-col items-center justify-start rounded-3xl border-2 border-slate-500 bg-slate-50 xs:w-3/4 lg:w-2/4">
        <div className="absolute left-0 top-0 ml-12 mt-8">
          <User size={42} className="" />
          <p>User</p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <h2 className="font-semibold">Recent</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}
