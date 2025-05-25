import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [popupMessage, setPopupMessage] = useState("");

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(item => item.productId === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ productId: product.id, quantity: 1 });
    }

    updateCart(updatedCart);

    setPopupMessage("Item added to cart");
    setTimeout(() => setPopupMessage(""), 3000);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const item = cart.find(i => i.productId === productId);
    if (!item) return;

    let updatedCart;
    if (item.quantity > 1) {
      updatedCart = cart.map(i =>
        i.productId === productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    } else {
      updatedCart = cart.filter(i => i.productId !== productId);
    }

    updateCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        popupMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
