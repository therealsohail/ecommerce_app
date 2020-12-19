import { Card } from "@material-ui/core";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Helpers/loader";

const CheckoutForm = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [isPayClicked, setPayClicked] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPayClicked(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        let { data } = await axios.post("http://localhost:8000/api/pay", {
          id,
          amount: 1099,
        });
        console.log(data);

        if (data.success === true) {
          setIsPaid(true);
          toast("Payment Successful");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const iframeStyles = {
    base: {
      color: "#454545",
      fontFamily: "Fira Code",
      fontSize: "16px",
      iconColor: "#fff",
      "::placeholder": {
        color: "#5C5C5C",
      },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
    complete: {
      iconColor: "green",
      color: "green",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

  const showLoader = () => {
    if (isPaid === false && isPayClicked === true) {
      return <Loader />;
    }
  };
  return (
    <div className="container">
      <form className="checkout-form">
        <div className="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Last Name</label>
          </div>
          <div class="input-field col s12">
            <input id="email" type="text" class="validate" />
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12">
            <input id="address" type="text" class="validate" />
            <label for="address">Address</label>
          </div>
          <div class="input-field col s12">
            <input id="city" type="text" class="validate" />
            <label for="city">City</label>
          </div>
        </div>

        <div className="card-element">
          <CardElement options={cardElementOpts} />
        </div>

        <button
          className="pay-btn"
          onClick={handleSubmit}
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <br />
        <div className="center-align">{showLoader()}</div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default CheckoutForm;
