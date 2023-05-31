import { Footer } from '@/components/Footer'
// import { api } from '@/lib/axios'
import DescProduct from '../../components/DescProduct'
import PageProductInfo from '../../components/PageProductInfo'
import Image from 'next/image'
import data from '../../../utils/data'
// import { ProductProps } from '@/interface/product'

export default async function PageProduct(props: any) {
  const prodId = props.params.id

  // const response = await api.get(`/product/${prodId}`)
  // const data: ProductProps = response.data

  return (
    <div className="flex h-auto flex-col bg-white text-black">
      <div className="mt-20 flex w-full flex-col items-center justify-center gap-16 font-alt">
        <div className="flex items-center justify-center xs:flex-col xs:gap-10 lg:flex-row lg:gap-32">
          {data.product
            .filter((element) => element.id === prodId)
            .map((element) => (
              <>
                <Image
                  width={1920}
                  height={1080}
                  key={element.id}
                  src={element.image}
                  alt={element.type}
                  className="pointer-events-none rounded-3xl xs:h-[16rem] xs:w-5/6 lg:h-[30rem] lg:w-full"
                />
                <PageProductInfo
                  id={prodId}
                  title={element.title}
                  price={element.price}
                  stock={element.stock}
                />
              </>
            ))}
        </div>
        {data.product
          .filter((element) => element.id === prodId)
          .map((element) => (
            <DescProduct key={prodId} desc={element.desc} id={prodId} />
          ))}
      </div>
      <Footer />
    </div>
  )
}
