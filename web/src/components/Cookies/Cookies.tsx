import Buttons from './Buttons'
import Infos from './Infos'

export default function Cookies() {
  return (
    <div className="relative flex h-[175px] flex-col items-center justify-center overflow-hidden bg-zinc-50 p-2 text-justify shadow-lg xs:mb-12 xs:w-3/4 lg:w-[35rem]">
      <Infos />
      <Buttons />
    </div>
  )
}
