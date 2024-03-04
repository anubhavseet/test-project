import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Outlet } from 'react-router-dom'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Outlet/>
      <Footer/>
    

    </>
  )
}

export default App
