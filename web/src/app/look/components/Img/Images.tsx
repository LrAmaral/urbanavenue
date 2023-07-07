import Image from 'next/image'
import React from 'react'
import { ImageProps } from '@/interface/ImageProps'

export default function Images({ id, img }: ImageProps) {
  return (
    <div
      key={id}
      className="pointer-events-none flex items-center xs:flex-col lg:flex-row-reverse"
    >
      <Image
        src={img}
        alt="image"
        width={1920}
        height={1080}
        className="w-full rounded-3xl object-contain xs:h-[20rem] xs:p-4 lg:h-[33rem]"
      />
    </div>
  )
}
