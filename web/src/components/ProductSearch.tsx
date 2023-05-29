import Link from 'next/link'
import { SearchProps } from '@/interface/search'

export const ProductSearch = ({ url, id, title }: SearchProps) => {
  return (
    <div key={id} className="flex flex-row justify-end gap-10 ">
      <Link href={url} className="hover:bg-slate-200">
        <p className="text-lg">{title}</p>
      </Link>
    </div>
  )
}
