import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productlist from './productlistingpage/ProductData';

function Cart() {
  const { id } = useParams();
  const productID = Number(id);

  const [item, setItem] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const product = Productlist.find((product) => product.id === productID);
   
    setItem(product);
    setCartItems((prevItems) => [...prevItems, product]);
  }, []);

  const updateCart = (itemID) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemID));
  };

  return (
    <div>
      <h1 className=' text-2xl font-extrabold'>CART</h1>
      <div>  
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
          <button onClick={() => updateCart(item.id)} className=' "text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Remove from Cart</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Cart;
