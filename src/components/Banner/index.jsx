import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import product from "../../assets/image.png";


const Banner = ()=>{
  return (
    <div className="banner">
      <Grid container spacing="0">
        <Grid className="tone1" item xs={6}>
          <span className="product-tag">New Collection 2020</span>
          <h1 className="product-tagline">Product with style.</h1>
          <span className="product-price">
            FROM: <b>$789</b>
          </span>
          <button className="shop-btn">Shop Now</button>
        </Grid>
        <Grid className="tone2" item xs={6}>
          <img className="product-img" src={product} alt="product" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner;
