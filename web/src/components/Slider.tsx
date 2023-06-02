import Image from 'next/image'
import img from '../../public/model-16.jpg'
import img2 from '../../public/model-18.jpg'
import { memo } from 'react'

export function Slider() {
  return (
    <section className="mt-10 flex w-full flex-col items-center justify-center gap-6">
      <div className="flex items-center justify-center overflow-hidden xs:flex-col xs:gap-6 lg:flex-row lg:gap-10">
        <div className="pointer-events-none relative flex items-center xs:flex-col lg:flex-row">
          <Image
            src={img}
            alt="image"
            width={1920}
            height={1080}
            placeholder="blur"
            className="h-full w-full rounded-3xl xs:h-[30rem] xs:p-4 lg:h-[35rem]"
          />
          <span className="absolute bottom-6 left-8 text-3xl text-white">
            Flawless looks
          </span>
        </div>
        <div className="pointer-events-none relative flex items-center gap-6 xs:flex-col lg:flex-row-reverse">
          <Image
            src={img2}
            alt="image"
            width={1920}
            height={1080}
            placeholder="blur"
            className="h-full w-full rounded-3xl xs:h-[30rem] xs:p-4 lg:h-[33rem] hover:lg:h-[30rem]"
          />
          <span className="absolute bottom-6 right-8 text-3xl text-white">
            Awesome visuals
          </span>
        </div>
      </div>
    </section>
  )
}

export default memo(Slider)
