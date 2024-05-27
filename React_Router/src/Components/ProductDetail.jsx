import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Productlist from './productlistingpage/ProductData';

const ProductDetail = () => {
  // Get the product ID from the URL
  const { id } = useParams();
  const productID = Number(id);
  //console.log(id)

  // Find the product in the product list
  const product = Productlist.find((product) => product.id === productID);

  // If the product doesn't exist, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <img src={product.image} className="w-full object-cover h-96 rounded-lg" alt={product.name} />
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-lg font-semibold text-gray-700">Rating: {product.rating.rate}</div>
            <div className="text-lg font-semibold text-blue-600">Reviews: {product.rating.count}</div>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex items-center space-x-3 mb-5">
            <span className="text-sm font-semibold">Color:</span>
            <button className="h-6 w-6 rounded-full border-2 border-gray-300"></button>
            <button className="h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700"></button>
            <button className="h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200"></button>
          </div>
          <div className="mb-5">
            <label htmlFor="size" className="block text-sm font-semibold mb-2">Size:</label>
            <select id="size" className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 w-full text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
              <option>8 UK</option>
              <option>9 UK</option>
              <option>10 UK</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            {/* Consider formatting the price using a library like react-currency-formatter */}
            <span className="text-2xl font-bold text-gray-900">INR {product.price * 80}</span>
            <Link to={`/cart/${product.id}`} className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-lg px-6 py-3 focus:outline-none focus:ring-4 focus:ring-orange-300">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
