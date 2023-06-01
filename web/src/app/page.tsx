import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Product } from '@/components/Product'
import data from './utils/data'

export default function Main() {
  return (
    <div
      id=""
      className="flex w-full flex-col items-center justify-center bg-white"
    >
      <Nav />
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl text-blue-600">What`s hot</h1>
        <div className="xs:col-span-1 lg:col-span-3">
          <div className="mt-6 grid justify-items-center gap-4">
            <div className="grid w-full items-center font-alt xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
              {data.product.slice(0, 8).map((element) => (
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
