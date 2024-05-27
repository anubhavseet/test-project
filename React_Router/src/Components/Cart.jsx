import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Productlist from './productlistingpage/ProductData';

function Cart() {
  const { id } = useParams();
  const productID = Number(id);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // If productID exists and it's valid, add the corresponding product to the cart
    if (!isNaN(productID)) {
      const product = Productlist.find((product) => product.id === productID);
      if (product) {
        setCartItems((prevItems) => [...prevItems, product]);
      }
    }
  }, [productID]);

  const removeFromCart = (itemID) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemID));
  };

  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-200">
        {cartItems.map((item) => (
          <li key={item.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={item.image}
                alt={item.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item.name}</h3>
                    <p className="text-sm">{item.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash"
                    >
                      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-heart"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:<span className="font-semibold"> ₹{cartItems.reduce((acc, curr) => acc + curr.price, 0)}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to="/" className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Back to shop
        </Link>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
