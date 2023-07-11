import { Nav } from '@/components/Nav'
import { Product } from '@/components/Product'
import data from './utils/data'
import Up from '@/components/Up'
import { Footer } from '@/components/Footer'

export default function Main() {
  return (
    <div
      id="main"
      className="flex w-full flex-col items-center justify-center bg-white"
    >
      <Nav />
      <div className="mb-16 mt-[7rem] flex w-full flex-col items-center justify-center">
        <div className="mt-8 grid gap-20 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.product.slice(8, 20).map((element) => (
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
      <Up id={'#main'} />
      <br />
      <Footer />
    </div>
  )
}
