import Link from 'next/link'
import Image from 'next/image'
import { ProductProps } from '@/@types/product'

export const Product = ({ id, url, image, title, price }: ProductProps) => {
  return (
    <div key={id} className="h-100 grid justify-items-center">
      <Link href={url} className="grid justify-items-center gap-2">
        <Image
          src={image}
          className="h-60 w-full object-cover transition-all"
          alt="image"
          placeholder="blur"
          width={1920}
          height={1080}
        />
        <p className="text-lg">{title}</p>
      </Link>
      <p className="mb-1 text-center">$ {price}</p>
    </div>
  )
}
