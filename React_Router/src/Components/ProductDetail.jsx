
import React from 'react'
import { useContext } from 'react'
import ProductContext from '../Context/ProductContext'
function ProductDetail() {
    
  const {Productlist} = useContext(ProductContext)
  return (
    <div>ProductDetail
      {Productlist}
    </div>
  )
}

export default ProductDetail