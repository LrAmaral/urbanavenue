import Image from 'next/image'
import img1 from '../../public/model-12.jpg'
import img2 from '../../public/model-13.jpg'
import img3 from '../../public/model-14.jpg'
import img4 from '../../public/model-11.jpg'
import { memo } from 'react'

export function Slider() {
  const images = [img1, img2, img3, img4]

  return (
    <div className="w-full">
      <div className="flex justify-center overflow-hidden lg:flex-row">
        <div className="pointer-events-none flex items-center xs:p-4 lg:h-[35rem] ">
          {images.map((image, index) => (
            <div className="h-full" key={`image${index}`}>
              <Image
                src={image}
                alt="image"
                width={1920}
                height={1080}
                placeholder="blur"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(Slider)
