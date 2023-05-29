export interface FunctionProps {
  Best?: (size: string) => void
  onReset: () => void
  lowestPrice: (minPrice: number, maxPrice: number) => void
  higherPrice: (minPrice: number, maxPrice: number) => void
  bestLowestPrice: (minPrice: number, maxPrice: number, size: string) => void
  bestHigherPrice: (minPrice: number, maxPrice: number, size: string) => void
}
