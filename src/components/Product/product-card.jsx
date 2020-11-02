import React, { Component } from "react";
import "./style.css";
import {
  Search,
  PersonOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";

function ProductCard(props) {
  const { id, name, price, img } = props;
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
        <a className="btn-floating halfway-fab waves-effect waves-light black large">
          <i className="material-icons">
            <ShoppingBasketOutlined />
          </i>
        </a>
      </div>
      <div className="card-content">
        <p>
          <b>{price}</b>
          <br />I am a very simple card.
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
