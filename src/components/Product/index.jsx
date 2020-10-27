import React, { Component } from "react";
import product from "../../assets/image.png";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./product-card";

class Product extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Iphone X",
        Price: 24.99,
        image: "",
      },
      {
        id: 2,
        name: "Iphone X",
        Price: 24.99,
        image: "",
      },
      {
        id: 3,
        name: "Iphone X",
        Price: 24.99,
        image: "",
      },
    ],
  };
  render() {
    return (
      <Grid className="product" container spacing="3">
        {this.state.products.map((prod) => (
          <ProductCard
            id={prod.id}
            name={prod.name}
            price={prod.price}
            img={prod.image}
          />
        ))}
      </Grid>
    );
  }
}

export default Product;
