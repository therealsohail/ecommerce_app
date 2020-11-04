import React, { Component } from "react";
import ProductCard from "./product-card";
import "./style.css";
import shoes from "../../data/shoes.json";
class Product extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    console.log(shoes);
    this.setState({
      products: shoes,
    });
  }

  render() {
    return (
      <div className="container">
        <h4>New Arrivals</h4>
        <br />
        <div className="row">
          <div className="card-wrap">
          {this.state.products.map((prod) => (
            <div key={prod.id} class="col s12 m4">
              <ProductCard
                id={prod.id}
                name={prod.name}
                price={prod.price}
                img={prod.images[0]}
                description={prod.description}
              />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
