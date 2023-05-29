import { CartProps } from '@/interface/cart'
import Image from 'next/image'

export default function Cart({ id, title, price, image, unity }: CartProps) {
  return (
    <div
      key={id}
      className="flex w-full flex-row items-center justify-evenly gap-6 text-black"
    >
      <div>
        <Image
          src={image}
          width={320}
          height={20}
          alt="image"
          className="rounded-3xl object-contain"
        ></Image>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p>U$ {price}</p>
      </div>
      {unity}
    </div>
  )
}
