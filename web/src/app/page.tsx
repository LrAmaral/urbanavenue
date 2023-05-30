import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import About from '@/components/About'
import { Slider } from '@/components/Slider'

export default function Main() {
  return (
    <div id="" className="flex flex-col items-center justify-center bg-white">
      <Nav />
      <Slider />
      <About />
      <Footer />
    </div>
  )
}
