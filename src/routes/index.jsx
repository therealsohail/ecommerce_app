import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "react-sidebar";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
// data
import arrivals from "../data/arrivals.json";
import shoes from "../data/shoes.json";
import jackets from "../data/jackets.json";
import hoodies from "../data/hoodies.json";
import kids from "../data/kids.json";
import StripeCheckout from "../components/Stripe/StripeCheckout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Product productValues={arrivals} />
          <Footer />
        </Route>

        <Route path="/Jackets">
          {/* <Banner /> */}
          <Product productValues={jackets} />
          <Footer />
        </Route>

        <Route path="/Kids">
          {/* <Banner /> */}
          <Product productValues={kids} />
          <Footer />
        </Route>

        <Route path="/Hoodies">
          {/* <Banner /> */}
          <Product productValues={hoodies} />
          <Footer />
        </Route>

        <Route path="/Shoes">
          {/* <Banner /> */}
          <Product productValues={shoes} />
          <Footer />
        </Route>

        <Route path="/Cart">
          <Cart />
        </Route>

        <Route path="/Checkout">
          <StripeCheckout />
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
