export interface FunctionProps {
  Best?: (size: string) => void
  onReset: () => void
  lowestPrice: (minPrice: number, maxPrice: number) => void
  higherPrice: (minPrice: number, maxPrice: number) => void
}
