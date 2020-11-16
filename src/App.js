import React from "react";
import { Route } from "react-router-dom";
import Routes from "./routes";
import { GlobalProvider } from "./context/GlobalState";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <Routes />
    </ProductContextProvider>
  );
}

export default App;
