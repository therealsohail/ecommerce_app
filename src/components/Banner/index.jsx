import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import product from "../../assets/image.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="row">
        <div className="col s12 m6 center tone1">
          <span className="product-tag">New Collection 2020</span>
          <h1 className="product-tagline">Products you need</h1>
          <span className="product-price">
            FROM: <b>$789</b>
          </span>
          <br />
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="col m6 tone2 hide-on-small-only">
          <img className="product-img" src={product} alt="product" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
