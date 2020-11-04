import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import { Badge } from "@material-ui/core";
import {
  Search,
  PersonOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/">
          <img className="nav-logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-mid">
        <ul>
          <Link to="/">
            <li className="text-black">Home</li>
          </Link>
          <Link to="/Jackets">
            <li>Jackets</li>
          </Link>
          <Link to="/Hoodies">
            <li>Hoodies</li>
          </Link>
          <Link to="/Kids">
            <li>Kids</li>
          </Link>
          <Link to="/Shoes">
            <li>Shoes</li>
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
              <Badge badgeContent="2" color="secondary">
                <ShoppingBasketOutlined />
              </Badge>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
