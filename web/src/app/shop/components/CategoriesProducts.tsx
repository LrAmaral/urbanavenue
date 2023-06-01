import { Product } from '@/components/Product'
import { api } from '@/lib/axios'
import { ProductProps } from '../../../interface/product'

export default async function CategoriesProducts() {
  const response = await api.get('/product')
  const data: ProductProps[] = response.data

  return (
    <div className="xs:col-span-1 lg:col-span-3">
      <div className="mt-6 grid justify-items-center gap-4">
        <div className="mt-6 grid items-center font-alt xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {data
            .sort(() => Math.random() - 0.5)
            .map((element) => (
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
        </div>
      </div>
    </div>
  )
}