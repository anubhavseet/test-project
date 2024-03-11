import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import ContactUS from './Components/ContactUS.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Productlisting from './Components/productlistingpage/Productlisting.jsx'
import Productpage from './Components/productlistingpage/Productpage.jsx'
import ProductDetail from './Components/ProductDetail.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"home",
        element: <Home/> 
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact_US",
        element:<ContactUS/>
      },
      {
        path:"log-in",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Signup/>
      },
      {
        path:"men",
        element:<Productlisting/>,
        children:[
          {
         path:"ProductDetail",
         element:<ProductDetail/>
          }
        ]
       
        
      },
      { path:"productpage",
      element:<Productpage/>
      }
     
     
    ]
    }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
