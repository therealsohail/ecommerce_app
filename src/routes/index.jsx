import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Product />
          <Footer />
        </Route>

        <Route path="/Jackets">
          {/* <Banner /> */}
          <Product />
          <Footer />
        </Route>

        <Route path="/Kids">
          {/* <Banner /> */}
          <Product />
          <Footer />
        </Route>

        <Route path="/Hoodies">
          {/* <Banner /> */}
          <Product />
          <Footer />
        </Route>

        <Route path="/Shoes">
          {/* <Banner /> */}
          <Product />
          <Footer />
        </Route>

        <Route path="/Checkout">
          <h1>checkout</h1>
        </Route>
        <Route path="/Login">
          <h1>login</h1>
        </Route>
        <Route path="/Signup">
          <h1>Signup</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
