import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Banner />
          {/* <Brand /> */}
          <Product />
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
