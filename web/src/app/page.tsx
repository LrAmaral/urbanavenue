import { Nav } from '@/components/Nav'
import { Product } from '@/components/Product'
import data from './utils/data'
import img from '../../public/shoe-model.jpg'
// import img2 from '../../public/shoe-model.jpg'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Main() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-white">
      <Nav />
      <div className="xs:col-span-1 lg:col-span-3">
        <Slider />
      </div>
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <div className="mt-8 grid gap-20 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.product.slice(0, 4).map((element) => (
            <Product
              url={element.url}
              key={element.id}
              id={element.id}
              image={element.image}
              title={element.title}
              price={element.price}
              type={''}
              size={''}
              desc={''}
              stock={0}
              quantity={0}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="pointer-events-none relative flex items-center justify-start xs:flex-col lg:flex-row">
          <Image
            src={img}
            alt="image"
            width={1920}
            height={1080}
            placeholder="blur"
            className=" h-full w-full rounded-3xl object-cover xs:h-[16rem] xs:p-4 lg:h-[30rem]"
          />
          <span className="xs:text- xl absolute text-white xs:bottom-6  xs:right-6 lg:bottom-12 lg:right-14 lg:text-3xl">
            Look beauty
          </span>
        </div>
      </div>
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <div className="mt-8 grid gap-20 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.product.slice(0, 4).map((element) => (
            <Product
              url={element.url}
              key={element.id}
              id={element.id}
              image={element.image}
              title={element.title}
              price={element.price}
              type={''}
              size={''}
              desc={''}
              stock={0}
              quantity={0}
            />
          ))}
        </div>
      </div>
      <p className="mb-10 text-justify font-alt xs:w-3/4 lg:w-3/4">
        Welcome to Vynix, where shoe enthusiasts and fashion-forward individuals
        unite to indulge in a delightful shopping experience. At Vynix, we take
        pride in being more than just a shoe store; we are a haven for those who
        appreciate style, comfort, and quality. Let us take a moment to
        highlight why Vynix is the ultimate destination for all your
        shoe-shopping needs.
      </p>
    </div>
  )
}
