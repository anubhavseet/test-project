import React, { useEffect, useState } from 'react';

import axios from 'axios';
const Productlisting = () => 
{
    const [products, setProducts] = useState([]);

            const axios = axios

            const options = {
              method: 'GET',
              url: 'https://shoes-collections.p.rapidapi.com/shoes',
              headers: {
                'X-RapidAPI-Key': '17ee4b7483mshd43c9abd6fee4cfp1033dbjsn13ce8a750095',
                'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
              }
            };

            const fetchData = useEffect(async () => {
              try {
                const response = await axios.request(options);
                //console.log(response.data);
                setProducts(response.data)
              } catch (error) {
                console.error(error);
              }
            },[])
            fetchData();

              return (
                <div>
                  {products.map(product => (
                    <div key={product.id}>
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <p>{product.price}</p>
                    </div>
                  ))}
                </div>
              );
  };

 export default Productlisting;
