import React from "react";
import { Link } from "react-router-dom";

const CheckoutCard = ({ subTotal, deliveryCharges }) => {
  return (
    <div class="card grey lighten-4 z-depth-0">
      <div class="card-content dark-text">
        <span class="card-title">Cart Summary</span>
        <hr />
        <br />
        <div className="row">
          <div className="col m6">Delivery Charges</div>
          <div className="col m6">{`$${deliveryCharges}`}</div>
        </div>
        <div className="row">
          <div className="col m6">Subtotal</div>
          <div className="col m6">{`$${subTotal}`}</div>
        </div>
        <hr />
        <div className="row total">
          <div className="col m6" style={{ fontWeight: "lighter" }}>
            <h5>Total</h5>
          </div>
          <div className="col m6">
            <h5>{`$${subTotal + deliveryCharges}`}</h5>
          </div>
        </div>
        <hr />
        <div>
          <Link to="/Checkout">
            <input type="button" class="checkout-btn" value="Checkout" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
