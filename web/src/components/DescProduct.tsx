import { DescProps } from '@/interface/desc'

export default function DescProduct({ id, desc }: DescProps) {
  return (
    <div
      key={id}
      className="mb-28 flex flex-col items-center justify-center gap-2 text-justify xs:w-3/4 lg:w-full"
    >
      {desc}
    </div>
  )
}
