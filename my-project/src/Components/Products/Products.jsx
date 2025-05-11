import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 font-semibold">{error}</p>;
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="h-48 w-full flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="h-full max-h-40 w-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 truncate mt-4">{product.title}</h2>
            <p className="text-gray-600 text-sm">${product.price}</p>

            <button
              onClick={() => navigate(`/products/${product.id}`)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
