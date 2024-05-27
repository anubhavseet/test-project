import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Productlist from './ProductData';

const Productlisting = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Productlist);
    }, []);

    return (
        <div className="flex flex-wrap">
            {products.map((product) => (
                <div key={product.id} className="w-fullsm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 hover:bg-slate-100">
                    <div className="bg-emerald-100 hover:bg-white rounded-3xl p-4">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <img src={product.image} alt={product.name} className="w-full h-auto mt-2" />
                        <Link to={`/product/${product.id}`} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:rounded-md"
                        >
                            BUY NOW INR  {product.price*80}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Productlisting;
