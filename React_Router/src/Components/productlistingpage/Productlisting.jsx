import React, { useEffect, useState } from 'react';

import Productlist from './ProductData';
const Productlisting = () => 
{
    const [product, setProducts] = useState([]);

    useEffect(()=>{

      setProducts(Productlist)
      console.log(product)

    },[])
     

              return (
                <div className="flex flex-wrap">
                {product.map((product) => (
                  <div
                    key={product.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                  >
                    <div className=" bg-white hover:shadow-inherit rounded-3xl p-4">
                      <h2 className="text-lg font-semibold">{product.name}</h2>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto mt-2"
                      />
                      <p className="text-gray-600 mt-2"></p>
                      <p className="text-green-600 font-semibold mt-2">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              );
  };

 export default Productlisting;
