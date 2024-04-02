import React from 'react';
import { useParams,Link } from 'react-router-dom';
import Productlist from './productlistingpage/ProductData';

const ProductDetail = () => {
    // Get the product ID from the URL
    const { id } = useParams();
    const productID=Number(id)
    //console.log(id)

    // Find the product in the product list
    const product = Productlist.find((product) => product.id === productID);

    // If the product doesn't exist, return an error message
    if (!product) {
        return <div>Product not found</div>;
    }

    // If the product exists, display its details
    return (
      <div className="flex flex-col h-screen justify-between items-center bg-white shadow-lg rounded px-10 py-10">
          <h2 className="text-3xl font-bold text-gray-900 mt-3">{product.name}</h2>
          <img className="w-1/2 h-1/2 object-contain" src={product.image} alt={product.name} />
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl text-gray-900 mb-6 font-bold">Price: ${product.price}</p>
          <Link to= {`/cart/${product.id}`}  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Add to cart
          </Link>
      </div>
  );
  
};

export default ProductDetail;
