import React, { useEffect, useState } from 'react';

import Productlist from './ProductData';
import { Link, NavLink,useNavigate,  createBrowserRouter } from 'react-router-dom';
import Productpage from './Productpage';
import ProductDetail from '../ProductDetail';

const Productlisting = () => 
{
    const [product, setProducts] = useState([]);

    useEffect(()=>{

      setProducts(Productlist)
      console.log(product)

    },[])
  const [showProductDetail, setShowProductDetail]=  useState(false)

  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('ProductDetail'); // Navigate to the new page
  };
 

              return (
                <div className="flex flex-wrap">
                {product.map((product) => (
                  <div
                    key={product.id}
                    className="w-fullsm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 hover:bg-slate-100"
                  >
                    <div className=" bg-emerald-100 hover:bg-white rounded-3xl p-4"
                     
                    >
                 
                      <h2 className="text-lg font-semibold">{product.name}</h2>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto mt-2"
                      />
                      <p className="text-gray-600 mt-2"></p>
                    
                      <button key={product.id} className="text-green-600  hover:bg-red-300 rounded-md hover:text-gray-950 hover:text-xs  font-bold mt-2"
                       onClick={handleBuyNowClick} 
                       
                      >
                       
                        
                        BUY NOW  ${product.price}
                      </button>
                     
                     
                    </div>
                  </div>
                ))}
                
              </div>
              );
  };

 export default Productlisting;
