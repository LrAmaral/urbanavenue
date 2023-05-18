'use client'

import { Filter } from '@/components/Filter'
import { Footer } from '@/components/Footer'
import { Product } from '@/components/Product'
import { useEffect, useState } from 'react'
import data from '@/app/utils/data'
import {
  Best,
  handleResetClick,
  lowestPrice,
  higherPrice,
  bestLowestPrice,
  bestHigherPrice,
} from '../../../../functions/ProductFilters'

export default function Products(props: any) {
  const [title, setTitle] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(data.product) // estado para armazenar a lista filtrada de produtos

  const prodType = props.params.type

  console.log('renderizou')

  // hooks para alterar o título
  useEffect(() => {
    if (prodType === 'tshirt') {
      setTitle('T-shirts')
    } else if (prodType === 'cap') {
      setTitle('Caps ')
    } else if (prodType === 'shoe') {
      setTitle('Shoes ')
    }
  }, [prodType])

  return (
    <div id="" className="flex flex-col bg-white text-black">
      <div className="grid gap-24 p-20 xs:h-auto xs:grid-cols-1 lg:h-auto lg:grid-cols-4">
        <div className="col-span-1">
          <Filter
            Best={(size: string) => Best(size, setFilteredProducts)}
            onReset={() => handleResetClick(setFilteredProducts)}
            lowestPrice={(minPrice: number, maxPrice: number) =>
              lowestPrice(minPrice, maxPrice, setFilteredProducts)
            }
            higherPrice={(minPrice: number, maxPrice: number) =>
              higherPrice(minPrice, maxPrice, setFilteredProducts)
            }
            bestLowestPrice={(
              minPrice: number,
              maxPrice: number,
              size: string,
            ) => bestLowestPrice(minPrice, maxPrice, size, setFilteredProducts)}
            bestHigherPrice={(
              minPrice: number,
              maxPrice: number,
              size: string,
            ) => bestHigherPrice(minPrice, maxPrice, size, setFilteredProducts)}
          />
        </div>
        <div className="font-alt xs:col-span-1 lg:col-span-3">
          <div className="grid justify-items-center">
            <h3 className="mb-5 text-2xl font-bold">{title}</h3>
            <div className="mt-6 grid items-center xs:grid-cols-1 xs:gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {filteredProducts
                .filter(
                  (element) => element.type === prodType || prodType === 'all',
                )
                .map((element) => (
                  <Product
                    url={element.url}
                    id={element.id}
                    key={element.id}
                    image={element.image}
                    title={element.title}
                    price={element.price}
                    type={''}
                    size={''}
                    desc={''}
                    stock={0}
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
