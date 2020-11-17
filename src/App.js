import React from "react";
import { Route } from "react-router-dom";
import Routes from "./routes";
import ProductContextProvider from "./context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <Routes />
    </ProductContextProvider>
  );
}

export default App;
