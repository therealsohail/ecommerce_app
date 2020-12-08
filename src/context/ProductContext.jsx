import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [productInCart, setProductInCart] = useState(0);
  const [products, setProducts] = useState([]);

  const addProductToCart = (product) => {
    setProductInCart(productInCart + 1);
    let productArray = products;
    productArray.push(product);
    setProducts(productArray);
  };
  return (
    <ProductContext.Provider
      value={{ productInCart, products, addProductToCart }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
