import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import { Badge } from "@material-ui/core";
import M from "materialize-css/dist/js/materialize.min.js";
import {
  Search,
  PersonOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import { ProductContext } from "../../context/ProductContext";

import MobileNav from "./MobileNav";

const Navbar = () => {
  useEffect(() => {
    var sideNav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sideNav, {});
  });
  const { productInCart } = useContext(ProductContext);

  return (
    <div>
      <nav className="z-depth-0">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            {/* Logo */}
            <img className="nav-logo valign-wrapper" src={logo} alt="" />
          </Link>
          <Link
            to="#"
            data-target="mobile-demo"
            className="sidenav-trigger black-text text-darken-2"
          >
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/" className="black-text text-darken-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Jackets" className="black-text text-darken-2">
                Jackets
              </Link>
            </li>
            <li>
              <Link to="/Hoodies" className="black-text text-darken-2">
                Hoodies
              </Link>
            </li>
            <li>
              <Link to="/Kids" className="black-text text-darken-2">
                Kids
              </Link>
            </li>
            <li>
              <Link to="/Shoes" className="black-text text-darken-2">
                Shoes
              </Link>
            </li>
            <li>
              <Link to="#" className="black-text text-darken-2">
                <Badge>
                  <Search />
                </Badge>
              </Link>
            </li>
            <li>
              <Link to="#" className="black-text text-darken-2">
                <Badge>
                  <PersonOutlined />
                </Badge>
              </Link>
            </li>
            <li>
              <Link to="/Cart" className="black-text text-darken-2 ">
                <Badge
                  badgeContent={productInCart}
                  color="secondary"
                  onClick={() => console.log("hiii")}
                >
                  <ShoppingBasketOutlined />
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <MobileNav productInCart={productInCart} />
    </div>
  );
};

export default Navbar;
