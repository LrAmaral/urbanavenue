import data from '@/app/utils/data'
import ProductCart from './components/ProductCart'
import { CartProps } from '@/interface/cart'
import CartIcon from './components/CartIcon'

export const metadata = {
  title: 'Cart | UrbanAvenue®',
  description: 'Shop Cart',
}

export default function Cart(props: CartProps) {
  // const prodId = props.id

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
        <CartIcon />
        <div className="flex flex-col items-center justify-center">
          {data.product
            .filter((element) => element.type)
            .slice(0, 1)
            .map((element) => (
              <div
                key={element.id}
                className="flex flex-row items-center justify-center"
              >
                <ProductCart
                  id={element.id}
                  key={element.id}
                  image={element.image}
                  title={element.title}
                  price={element.price}
                  unity={element.stock}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
