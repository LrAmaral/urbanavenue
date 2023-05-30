import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import About from '@/components/About'
import { Slider } from '@/components/Slider'

export default function Main() {
  return (
    <div id="" className="flex flex-col items-center justify-center bg-white">
      <Nav />
      <Slider />
      <div className="mt-4 xs:text-3xl lg:text-5xl">
        <span className="underline decoration-blue-500 underline-offset-4">
          Flawless
        </span>{' '}
        new trends
      </div>
      <About />
      <Footer />
    </div>
  )
}
