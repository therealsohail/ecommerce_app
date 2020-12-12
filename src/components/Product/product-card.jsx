import React, { useState, useContext } from "react";
import "./style.css";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { ProductContext } from "../../context/ProductContext";

const ProductCard = (props) => {
  const { id, name, price, img, description } = props;
  const { addProductToCart } = useContext(ProductContext);

  return (
    <div className="card">
      <div className="card-image">
        <img
          className="product-image responsive-image"
          src={img}
          alt="product"
        />
        <span style={{ color: "black " }} className="card-title">
          {name}
        </span>
        <a
          onClick={() => addProductToCart({ id, name, price, img })}
          className="btn-floating halfway-fab waves-effect waves-light black large"
        >
          <i className="material-icons">
            <ShoppingBasketOutlined />
          </i>
        </a>
      </div>
      <div className="card-content">
        <p>
          <b>{price}</b>
          <br />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
