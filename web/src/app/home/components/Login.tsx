'use client'

import { Eye, EyeSlash } from '@phosphor-icons/react'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../../../assets/logo.svg'
import Image from 'next/image'

export const Login = () => {
  const [visiPassword, setVisiPassword] = useState(false)

  function toggleVisiPassword() {
    return setVisiPassword(!visiPassword)
  }

  return (
    <div className="grid h-screen justify-items-center gap-5 xs:grid-cols-1 xs:p-5 lg:grid-cols-2 lg:p-0">
      <div className="flex w-full flex-row xs:items-center xs:justify-center lg:items-center lg:justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Link href="/">
            <Image src={logo} alt="" width={180} height={40} />
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-white p-8 font-alt shadow-2xl xs:w-full lg:h-2/4 lg:w-2/4">
          <h2 className="text-2xl">Access your account</h2>
          <form
            action=""
            method="post"
            className="flex w-3/4 flex-col items-start justify-center gap-1"
          >
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
                className="border-2  p-1 px-2 focus:outline-zinc-300 "
                required
              />
              {visiPassword === false ? (
                <button type="button" onClick={toggleVisiPassword}>
                  <Eye
                    size={24}
                    weight="thin"
                    className="absolute right-2 top-[30px]"
                  />
                </button>
              ) : (
                <button type="button" onClick={toggleVisiPassword}>
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
                className="w-2/4 bg-blue-600 p-1 text-white transition-colors ease-in-out hover:bg-black"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row gap-1">
          <p>Dont have an account?</p>
          <Link
            href={'/home'}
            className="text-blue-600 transition-colors hover:text-blue-700 hover:underline"
          >
            Register now.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
