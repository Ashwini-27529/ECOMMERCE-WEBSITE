import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
      </div>
    );

  if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-8 gap-8">
        
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm h-80 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl font-semibold text-red-500">${product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          
          {/* Add to Cart Button */}
          <button
            className="mt-4 bg-red-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            onClick={() => addToCart(product)}
          >
             Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
