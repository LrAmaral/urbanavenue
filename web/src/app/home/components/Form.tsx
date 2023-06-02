'use client'

import { Eye, EyeSlash } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../assets/logo.svg'

export const Form = () => {
  const [visiPassword, setVisiPassword] = useState(false)

  function toggleVisiPassword() {
    return setVisiPassword(!visiPassword)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <Link href="/">
        <Image src={logo} alt="" width={140} height={40} />
      </Link>
      <div className="flex w-full flex-col items-center justify-center gap-10 ">
        <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-white p-8 font-alt shadow-2xl xs:w-3/4 lg:w-1/4">
          <h2 className="text-xl">Create your account</h2>
          <form
            action=""
            method="post"
            className="flex w-3/4 flex-col items-start justify-center gap-1"
          >
            <label className="mt-3 font-semibold">First name: </label>
            <input
              type="text"
              id="first"
              title="name"
              pattern="[A-Za-z]+"
              className="w-full border-2 p-1 px-2 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">Last name: </label>
            <input
              type="text"
              title="name"
              id="last"
              pattern="[A-Za-z]+"
              className="w-full border-2 p-1 px-2 focus:outline-zinc-300"
              required
            />
            <label className="mt-3 font-semibold">E-mail: </label>
            <input
              type="text"
              title="email"
              id="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              className="w-full border-2 p-1 px-2 focus:outline-zinc-300"
              required
            />
            <label className="relative mt-3 flex w-full flex-col font-semibold">
              Password:
              <input
                type={visiPassword ? 'password' : 'text'}
                title="password"
                id="password"
                className=" border-2 p-1 px-2 focus:outline-zinc-300 "
                required
              />
              {visiPassword === false ? (
                <button
                  type="button"
                  onClick={toggleVisiPassword}
                  className="w-fit"
                >
                  <Eye
                    size={24}
                    weight="thin"
                    className="absolute right-2 top-[30px]"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={toggleVisiPassword}
                  className="w-fit"
                >
                  <EyeSlash
                    size={24}
                    weight="thin"
                    className="absolute right-2 top-[30px]"
                  />
                </button>
              )}
            </label>
            <div className="mt-4 flex w-full items-center justify-center">
              <button
                type="submit"
                value="Send"
                className="w-2/4 bg-blue-600 p-2 text-white transition-colors ease-in-out hover:bg-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row gap-1">
          <p>I have an account.</p>
          <Link
            href={'/home/login'}
            className="text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Sign in.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Form
