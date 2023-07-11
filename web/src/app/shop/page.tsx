// import CategoriesProducts from '@/components/CategoriesProducts'
import { Product } from '@/components/Product'
// import data from '../utils/data'
// import { api } from '@/lib/axios'
// import { ProductProps } from '@/interface/product'
import data from '../utils/data'
export default async function All() {
  // const response = await api.get('/product')
  // const data: ProductProps[] = response.data

  return (
    <div id="main" className="flex flex-col bg-white text-black">
      <div className="mb-16 mt-[7rem] flex w-full flex-col items-center justify-center">
        <div className="mt-8 grid gap-20 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.product.map((element) => (
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
  )
}
