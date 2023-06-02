import Image from 'next/image'
import { api } from '@/lib/axios'
import DescProduct from '../../components/DescProduct'
import PageProductInfo from '../../components/PageProductInfo'
import { ProductProps } from '@/interface/product'

export default async function PageProduct(props: any) {
  const prodId = props.params.id
  const response = await api.get(`/pageproduct/${prodId}`)
  const data: ProductProps = response.data
  return (
    <div className="flex h-auto flex-col bg-white text-black">
      <div className="mt-20 flex w-full flex-col items-center justify-center gap-16 font-alt">
        <div className="flex items-center justify-center xs:flex-col xs:gap-10 lg:flex-row lg:gap-32">
          <Image
            width={1920}
            height={1080}
            key={data.id}
            src={data.image}
            alt={data.type}
            className="pointer-events-none xs:h-[16rem] xs:w-5/6 lg:h-[30rem] lg:w-full"
          />
          <PageProductInfo
            id={prodId}
            title={data.title}
            price={data.price}
            stock={data.stock}
          />
        </div>
        <DescProduct key={prodId} desc={data.desc} id={prodId} />
      </div>
    </div>
  )
}
