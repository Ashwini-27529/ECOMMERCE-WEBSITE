import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  
  const { popupMessage } = useContext(CartContext);

{popupMessage && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-300">
    {popupMessage}
  </div>
)}

  
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const productCache = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productDetails = await Promise.all(
          cart.map(async (product) => {
            if (!productCache.current[product.productId]) {
              const response = await fetch(
                `https://fakestoreapi.com/products/${product.productId}`
              );
              const data = await response.json();
              productCache.current[product.productId] = data;
            }
            return {
              ...product,
              ...productCache.current[product.productId],
            };
          })
        );
        setProducts(productDetails);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (cart.length > 0) {
      fetchProductDetails();
    } else {
      setProducts([]);
    }
  }, [cart]);

  useEffect(() => {
    const total = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    setTotalAmount(total);
  }, [products]);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container pt-16 mx-auto my-8 min-h-[300px]">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="space-y-4">
        {products.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <>
            {products.map((product) => (
              <div
                key={`${product.productId}-${product.id}`}
                className="p-4 border rounded shadow flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{product.title}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p className="flex items-center gap-2 mt-2">
                      Quantity:
                      <button
                        onClick={() => decreaseQuantity(product.productId)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(product.productId)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-8">
              <div className="bg-gradient-to-br from-yellow-50 via-red-100 to-pink-100 p-6 rounded-2xl shadow-lg w-full sm:w-2/3 md:w-1/3 border border-red-200">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-800 mb-4">
                  <span className="uppercase tracking-wide">Total Amount</span>
                  <span className="text-red-700 text-xl font-bold">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-full shadow-md hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
