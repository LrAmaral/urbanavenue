import { Nav } from '@/components/Nav'
import Slider from './components/Slider'

export default function Look() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Nav />
      <div className="xs:col-span-1 lg:col-span-3">
        <Slider />
      </div>
    </div>
  )
}
