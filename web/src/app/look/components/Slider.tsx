import Images from './Img/Images'
import data from '../../utils/data'

export default function Slider() {
  return (
    <main className="flex h-auto w-full flex-col items-center justify-center xs:gap-0 lg:gap-6">
      <div className="xs:grid-col-1 grid justify-items-center overflow-hidden xs:w-3/4 xs:gap-0 lg:w-full lg:grid-cols-2 lg:gap-6">
        {data.images.map((element) => (
          <div key={element.id} className="first:col-span-2">
            <Images key={element.id} img={element.img} id={element.id} />
          </div>
        ))}
      </div>
    </main>
  )
}
