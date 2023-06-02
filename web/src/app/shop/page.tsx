// import CategoriesProducts from '@/components/CategoriesProducts'
import { Product } from '@/components/Product'
// import data from '../utils/data'
import { api } from '@/lib/axios'
import { ProductProps } from '@/interface/product'

export default async function All() {
  const response = await api.get('/product')
  const data: ProductProps[] = response.data

  return (
    <div className="flex flex-col bg-white text-black">
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <div className="xs:col-span-1 lg:col-span-3">
          <div className="mt-6 grid justify-items-center gap-4">
            <div className="mt-6 grid w-full items-center font-alt xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {data.map((element) => (
                <Product
                  url={`/shop/pageproduct/${element.id}`}
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

              {/* {data.product.slice(0, 8).map((element) => (
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
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
