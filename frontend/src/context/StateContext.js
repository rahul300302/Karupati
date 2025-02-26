import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <StateContext.Provider value={{ cart, addToCart }}>
      {children}
    </StateContext.Provider>
  );
};
