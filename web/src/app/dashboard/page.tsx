import SalesInfo from './components/SalesInfo'
import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="grid h-screen xs:grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-6 text-black">
        <Link href="/">
          <h1 className="font-sans xs:text-4xl lg:text-5xl">UrbanAvenue</h1>
        </Link>
        <div className="flex flex-row items-center justify-center gap-4 font-alt">
          <Link href={''} className=" hover:underline">
            Create
          </Link>
          <Link href={''} className=" hover:underline">
            Register
          </Link>
          <Link href={''} className=" hover:underline">
            Update
          </Link>
          <Link href={''} className=" hover:underline">
            Delete
          </Link>
        </div>
      </div>
      <SalesInfo />
    </div>
  )
}
