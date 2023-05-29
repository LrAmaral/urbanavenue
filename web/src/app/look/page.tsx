import { Nav } from '@/components/Nav'
import img2 from '../../../public/model-2.jpg'
import img4 from '../../../public/cap-4.jpg'
import img5 from '../../../public/model-13.jpg'
import img6 from '../../../public/model-5.jpg'
import img7 from '../../../public/model-6.jpg'
import img8 from '../../../public/model-7.jpg'
import img9 from '../../../public/model-8.jpg'
import img10 from '../../../public/model-9.jpg'
import img11 from '../../../public/model-10.jpg'
import img12 from '../../../public/model-12.jpg'
import Image from 'next/image'
import { Footer } from '@/components/Footer'

export default function LookBook() {
  const images = [img2, img4, img5, img6, img7, img8, img9, img10, img11, img12]

  return (
    <div className="flex flex-col items-center justify-center">
      <Nav />
      <div className="mb-14 mt-10 grid w-3/4 items-center justify-items-center gap-6 xs:grid-cols-2 lg:grid-cols-5">
        {images
          .sort(() => Math.random() - 0.5)
          .map((image, index) => (
            <div
              className="flex w-full flex-col items-center justify-center"
              key={`image${index}`}
            >
              <Image
                src={image}
                alt="image"
                width={1920}
                height={1080}
                placeholder="blur"
                className="w-[35vh] rounded-3xl"
              />
            </div>
          ))}
      </div>
      <Footer />
    </div>
  )
}
