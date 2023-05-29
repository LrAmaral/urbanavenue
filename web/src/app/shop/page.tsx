import { Footer } from '@/components/Footer'
import CategoriesProducts from '@/components/CategoriesProducts'
import SelectCategories from '@/components/SelectCategories'

export default function All() {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <SelectCategories />
        <CategoriesProducts />
      </div>
      <Footer />
    </div>
  )
}
