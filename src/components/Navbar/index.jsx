import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
import { useState } from "react";

const Navbar = () => {
  useEffect(() => {
    var sideNav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sideNav, {});
  });
  const { productInCart } = useContext(ProductContext);

  return (
    <div>
      <nav>
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
              <Link to="#" className="black-text text-darken-2">
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

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Jackets">Jackets</Link>
        </li>
        <li>
          <Link to="/Hoodies">Hoodies</Link>
        </li>
        <li>
          <Link to="/Kids">Kids</Link>
        </li>
        <li>
          <Link to="/Shoes">Shoes</Link>
        </li>
        <li>
          <Link to="#">
            <Search />
          </Link>
        </li>
        <li>
          <Link to="#">
            <PersonOutlined />
          </Link>
        </li>
        <li>
          <Link to="#">
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
    // <div className="nav">
    //   <div className="nav-left">
    //     <Link to="/">
    //       <img className="nav-logo" src={logo} alt="" />
    //     </Link>
    //   </div>
    //   <div className="nav-mid">
    //     <ul>
    //       <Link to="/">
    //         <li className="text-black">Home</li>
    //       </Link>
    //       <Link to="/Jackets">
    //         <li>Jackets</li>
    //       </Link>
    //       <Link to="/Hoodies">
    //         <li>Hoodies</li>
    //       </Link>
    //       <Link to="/Kids">
    //         <li>Kids</li>
    //       </Link>
    //       <Link to="/Shoes">
    //         <li>Shoes</li>
    //       </Link>
    //     </ul>
    //   </div>

    //   <div className="nav-right">
    //     <ul>
    //       <Link to="/">
    //         <li>
    //           <Search />
    //         </li>
    //       </Link>
    //       <Link to="/">
    //         <li>
    //           <PersonOutlined />
    //         </li>
    //       </Link>
    //       <Link to="/">
    //         <li>
    //           <Badge
    //             badgeContent={productInCart}
    //             color="secondary"
    //             onClick={() => console.log("hiii")}
    //           >
    //             <ShoppingBasketOutlined />
    //           </Badge>
    //         </li>
    //       </Link>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
