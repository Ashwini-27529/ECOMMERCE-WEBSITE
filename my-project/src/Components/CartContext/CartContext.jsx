import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/1");
      if (!response.ok) throw new Error("Failed to fetch cart");

      const data = await response.json();
      setCart(data.products || []);
      setCartCount(
        data.products
          ? data.products.reduce((acc, item) => acc + item.quantity, 0)
          : 0
      );
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const syncCartWithAPI = async (updatedCart) => {
    try {
      await fetch("https://fakestoreapi.com/carts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          date: new Date().toISOString(),
          products: updatedCart,
        }),
      });
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const addToCart = async (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(
      (item) => item.productId === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ productId: product.id, quantity: 1 });
    }

    setCart(updatedCart);
    setCartCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
    syncCartWithAPI(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
    syncCartWithAPI(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const item = cart.find((i) => i.productId === productId);
    if (!item) return;

    let updatedCart;
    if (item.quantity > 1) {
      updatedCart = cart.map((i) =>
        i.productId === productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    } else {
      updatedCart = cart.filter((i) => i.productId !== productId);
    }

    setCart(updatedCart);
    setCartCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
    syncCartWithAPI(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

