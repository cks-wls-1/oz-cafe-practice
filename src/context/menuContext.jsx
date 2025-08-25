import { useState, createContext, useContext } from "react";
import data from "../assets/data";

const menuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(data.menu);
  return (
    <menuContext.Provider value={{ menu, setMenu }}>
      {children}
    </menuContext.Provider>
  );
}

export function useMenu() {
  return useContext(menuContext);
}
