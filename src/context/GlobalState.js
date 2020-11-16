import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  cartCounter: 3,
};

//Context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addCartItem = (cartCounter) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: cartCounter,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        cartCounter: state.cartCounter,
        addCartItem: addCartItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
