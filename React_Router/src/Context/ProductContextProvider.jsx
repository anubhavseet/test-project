import React from 'react'
import ProductContext from './ProductContext'
//import ProductData from './src/Components/productlistingpage/ProductData'
import Productlist from '../Components/productlistingpage/ProductData'
function ProductContextProvider({children}) {
   
  const data = Productlist

  return (
    <ProductContext.Provider  value={data}>
            {children }
    </ProductContext.Provider>
  )
}

export default ProductContextProvider