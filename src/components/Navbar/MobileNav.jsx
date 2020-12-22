import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  PersonOutlined,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const MobileNav = ({ productInCart }) => {
  return (
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
      {/* <li>
        <Link to="#">
          <Search />
        </Link>
      </li>
      <li>
        <Link to="#">
          <PersonOutlined />
        </Link>
      </li> */}
      <li>
        <Link to="/Cart">
          <Badge badgeContent={productInCart} color="secondary">
            <ShoppingBasketOutlined />
          </Badge>
        </Link>
      </li>
    </ul>
  );
};

export default MobileNav;
