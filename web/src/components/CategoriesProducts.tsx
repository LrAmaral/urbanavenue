import { Product } from '@/components/Product'
import data from '../app/utils/data'

export default function CategoriesProducts(props: any) {
  return (
    <div className="xs:col-span-1 lg:col-span-3">
      <div className="mt-6 grid justify-items-center gap-4">
        <div className="mt-6 grid items-center font-alt xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {data.product
            .sort(() => Math.random() - 0.5)
            .map(
              (
                element, // const linha 65
              ) => (
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
              ),
            )}
        </div>
      </div>
    </div>
  )
}
