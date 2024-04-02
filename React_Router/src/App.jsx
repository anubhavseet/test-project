import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Outlet } from 'react-router-dom'
import ProductContextProvider from './Context/ProductContextProvider'
import { Children } from 'react'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <ProductContextProvider value={Children}>
      
      <Header/>
      <Outlet/>
      <Footer/>
    

    </ProductContextProvider>
  )
}

export default App
