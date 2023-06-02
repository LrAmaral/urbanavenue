import Link from 'next/link'
import Image from 'next/image'
import { ProductProps } from '@/interface/product'

export const Product = ({ id, url, image, title, price }: ProductProps) => {
  return (
    <div key={id} className="h-100 grid justify-items-center">
      <Link href={url} className="grid justify-items-center gap-2">
        <Image
          src={image}
          className="h-60 w-full object-cover transition-all ease-in-out hover:scale-105"
          alt="image"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <p className="text-lg">{title}</p>
      </Link>
      <p className="mb-1 text-center">$ {price}</p>
    </div>
  )
}
