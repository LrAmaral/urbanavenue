import Images from './Images'
import data from '../../../utils/data'

export default function Slider() {
  return (
    <main className="mb-6 flex w-full flex-col items-center justify-center">
      <div className="grid w-full xs:grid-cols-2 lg:grid-cols-4">
        {data.images.map((element) => (
          <div
            key={element.id}
            className="rounded-xl first:col-span-2 last:col-span-2"
          >
            <Images key={element.id} img={element.img} id={element.id} />
          </div>
        ))}
      </div>
    </main>
  )
}
