import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="page-footer black">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Ecommerce App</h5>
            <p class="grey-text text-lighten-4">
              This is a portfolio project and a demo ecommerce application.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Collections</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="/shoes">
                  Shoes
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/jackets">
                  Jackets
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/hoodies">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/kids">
                  Kids
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2020 Muhammad Sohail
          <a class="grey-text text-lighten-4 right" href="#!">
            www.hailtech.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
