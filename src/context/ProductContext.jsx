import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [productInCart, setProductInCart] = useState(0);
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const deliveryCharges = 80;

  const findProduct = (id) => {
    let product;
    products.forEach((prod) => {
      if (prod.id === id) {
        product = prod;
      }
    });
    return product;
  };

  const extractMoney = function (string) {
    var amount = string.match(/[0-9]+([,.][0-9]+)?/);
    var unit = string.replace(/[0-9]+([,.][0-9]+)?/, "");
    if (amount && unit) {
      return {
        amount: +amount[0].replace(",", "."),
        currency: unit,
      };
    }
    return null;
  };

  const addProductToCart = (product) => {
    product["quantity"] = 1;
    setProductInCart(productInCart + 1);
    let productArray = products;
    productArray.push(product);
    setProducts(productArray);

    //Calculate Price
    calcAmountIncreased(productArray);
  };

  const deleteProductFromCart = (product) => {
    const productArray = products;
    productArray.forEach((prod, id) => {
      if (product.id === prod.id) {
        productArray.splice(id, 1);
      }
    });
    setProducts([...productArray]);
    calcAmountDecreased(productArray);
    setProductInCart(productInCart - 1);
  };

  const calcAmountIncreased = (products) => {
    let subTotal = 0;
    products.forEach((prod) => {
      let productPrice = extractMoney(prod.price);
      subTotal += productPrice.amount;
    });
    setSubTotal(subTotal);
  };
  const calcAmountDecreased = (products) => {
    let subTotal = 0;
    products.forEach((prod) => {
      let productPrice = extractMoney(prod.price);
      subTotal += productPrice.amount;
    });
    setSubTotal(subTotal);
  };

  return (
    <ProductContext.Provider
      value={{
        productInCart,
        products,
        subTotal,
        deliveryCharges,
        addProductToCart,
        deleteProductFromCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
