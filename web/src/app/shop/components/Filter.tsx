import { FunctionProps } from '../../../interface/filter'

export const Filter = (props: FunctionProps) => {
  const { Best, onReset, lowestPrice, higherPrice } = props

  function handleResetClick() {
    onReset()
  }

  return (
    <div className="grid gap-2 border-lime-600 font-alt">
      <h2 className="mb-10 flex justify-start font-bold">Filter by:</h2>
      <div className="grid justify-items-start gap-1">
        <h4 className="flex font-bold">Filter by size:</h4>
        {Best ? (
          <>
            <button
              onClick={() => Best('40')}
              type="button"
              value="Filter"
              className="flex w-fit items-center"
            >
              40
            </button>
            <button
              onClick={() => Best('42')}
              type="button"
              value="Filter"
              className="flex w-fit items-center"
            >
              42
            </button>
            <button
              onClick={() => Best('44')}
              type="button"
              value="Filter"
              className="flex w-fit items-center"
            >
              44
            </button>
          </>
        ) : null}
      </div>
      <div className="grid justify-items-start gap-1">
        <h4 className="flex justify-center font-bold">Filter by price:</h4>
        <button
          onClick={() => lowestPrice(50, 100)}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $50 & $100
        </button>
        <button
          onClick={() => higherPrice(100, 150)}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $100 & $150
        </button>
      </div>
      <div className="flex justify-start">
        <button
          onClick={handleResetClick}
          type="button"
          value="Reset"
          className="flex w-fit items-center font-bold"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
