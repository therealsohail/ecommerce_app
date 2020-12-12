import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import CheckoutCard from "./checkoutCard";
import ProductTable from "./productTable";
import "./style.css";

const Cart = () => {
  const {
    products,
    subTotal,
    deliveryCharges,
    deleteProductFromCart,
  } = useContext(ProductContext);

  const showCart = () => {
    console.log(products.length);
    if (products.length === 0) {
      alert("Cart is empty! come back with products in basket.");
    } else {
      return (
        <div className="container">
          <h4>Your Cart ({products.length} items)</h4>
          <div className="row">
            <div className="col s12 m8">
              <ProductTable
                products={products}
                deleteProductFromCart={deleteProductFromCart}
              />
            </div>
            <div className="col s12 m4">
              <CheckoutCard
                subTotal={subTotal}
                deliveryCharges={deliveryCharges}
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return showCart();
};

export default Cart;
