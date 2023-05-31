import { FunctionProps } from '../../../interface/filter'

export const Filter = (props: FunctionProps) => {
  const {
    Best,
    onReset,
    lowestPrice,
    higherPrice,
    bestLowestPrice,
    bestHigherPrice,
  } = props

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
              onClick={() => Best('P')}
              type="button"
              value="Filter"
              className="flex w-fit items-center"
            >
              P
            </button>
            <button
              onClick={() => Best('M')}
              type="button"
              value="Filter"
              className="flex w-fit items-center"
            >
              M
            </button>
            <button
              onClick={() => Best('G')}
              type="button"
              value="Filter"
              className="flex w-fit items-center"
            >
              G
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
        <h4 className="flex justify-center font-bold">Merge Filter:</h4>
        <button
          onClick={() => bestLowestPrice(50, 100, 'P')}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $50 & $100 & P
        </button>
        <button
          onClick={() => bestLowestPrice(50, 100, 'M')}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $50 & $100 & M
        </button>
        <button
          onClick={() => bestLowestPrice(50, 100, 'G')}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $50 & $100 & G
        </button>
        <button
          onClick={() => bestHigherPrice(100, 150, 'P')}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $100 & $150 & P
        </button>
        <button
          onClick={() => bestHigherPrice(100, 150, 'M')}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $100 & $150 & M
        </button>
        <button
          onClick={() => bestHigherPrice(100, 150, 'G')}
          type="button"
          value="Filter"
          className="flex w-fit items-center"
        >
          $100 & $150 & G
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
