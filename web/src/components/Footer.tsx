import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.svg'

export const Footer = () => {
  return (
    <div className="flex w-full text-black xs:h-auto xs:flex-col xs:items-center xs:justify-center xs:gap-6 lg:h-48 lg:flex-col lg:items-center lg:justify-around">
      <div className="flex w-full items-center justify-around gap-8 xs:flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <Image src={logo} width={100} height={40} alt="" />
          <p className="mb-2 font-alt">Style meets comfort.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 font-alt xs:mb-10 lg:mb-0">
          <Link
            href={'mailto: amaralrdev@gmail.com'}
            target="_blank"
            className="flex items-center justify-center gap-1 font-bold text-blue-700 hover:text-blue-800"
          >
            contact@vynix.com.br
          </Link>
        </div>
      </div>
    </div>
  )
}
