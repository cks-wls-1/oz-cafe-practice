import { useState, createContext, useContext } from "react";

const cartContext = createContext();

export function cartProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
