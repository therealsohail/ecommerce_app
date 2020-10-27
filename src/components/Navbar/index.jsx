import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import {
  Search,
  PersonOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-left">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-mid">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Brands</li>
            </Link>
            <Link to="/">
              <li>New Arrival</li>
            </Link>
            <Link to="/">
              <li>Products</li>
            </Link>
          </ul>
        </div>

        <div className="nav-right">
          <ul>
            <Link to="/">
              <li>
                <Search />
              </li>
            </Link>
            <Link to="/">
              <li>
                <PersonOutlined />
              </li>
            </Link>
            <Link to="/">
              <li>
                <ShoppingBasketOutlined />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
