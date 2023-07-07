import data from '../app/utils/data'

export function Type(type: string, setFilteredProducts: any) {
  const filtered = data.product.filter((product) => product.type === type)
  setFilteredProducts(filtered)
}

export function handleResetClick(setFilteredProducts: any) {
  console.log('resetou')
  setFilteredProducts(data.product)
}
