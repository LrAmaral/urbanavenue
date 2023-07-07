import { FunctionProps } from '@/interface/filter'

export const Filter = (props: FunctionProps) => {
  const { Type, onReset } = props

  function handleResetClick() {
    onReset()
  }

  return (
    <div className="absolute grid border-lime-600 font-alt lg:left-[15rem] lg:top-[10rem]">
      <div className="grid justify-items-start">
        {Type ? (
          <>
            <button
              onClick={handleResetClick}
              type="button"
              value="Reset"
              className="flex w-fit items-center hover:text-zinc-400"
            >
              all
            </button>
            <button
              onClick={() => Type('sb')}
              type="button"
              value="Filter"
              className="flex w-fit items-center hover:text-zinc-400"
            >
              tshirt
            </button>
            <button
              onClick={() => Type('sb')}
              type="button"
              value="Filter"
              className="flex w-fit items-center hover:text-zinc-400"
            >
              hoodies
            </button>
            <button
              onClick={() => Type('sb')}
              type="button"
              value="Filter"
              className="flex w-fit items-center hover:text-zinc-400"
            >
              pants
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}
