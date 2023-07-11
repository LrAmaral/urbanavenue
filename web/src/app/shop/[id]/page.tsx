import Image from 'next/image'
// import { api } from '@/lib/axios'
import DescProduct from '../components/PageProduct/DescProduct'
import PageProductInfo from '../components/PageProduct/PageProductInfo'
// import { ProductProps } from '@/interface/product'
import data from '../../utils/data'

export default async function PageProduct(props: any) {
  // const prodId = props.params.id
  // const response = await api.get(`/pageproduct/${prodId}`)
  // const data: ProductProps = response.data

  const prodId = props.params.id

  return (
    <div className="flex h-auto flex-col bg-white text-black">
      {data.product
        .filter((element) => element.id === prodId)
        .map((element) => (
          <div
            key={element.id}
            className="mt-20 flex w-full flex-col items-center justify-center gap-16 font-alt"
          >
            <div className="flex items-center justify-center xs:flex-col xs:gap-10 lg:flex-row lg:gap-32">
              <Image
                width={1920}
                height={1080}
                key={element.id}
                src={element.image}
                alt={element.type}
                className="pointer-events-none xs:h-[16rem] xs:w-full lg:h-[30rem] lg:w-full"
              />
              <PageProductInfo
                id={element.id}
                title={element.title}
                price={element.price}
                stock={element.stock}
              />
            </div>
            <DescProduct key={prodId} desc={element.desc} id={prodId} />
          </div>
        ))}
    </div>
  )
}
