import { Nav } from '@/components/Layout/Nav'
import Slider from './components/Img/Slider'

export default function Look() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <Nav />
      <div className="">
        <Slider />
      </div>
    </div>
  )
}
