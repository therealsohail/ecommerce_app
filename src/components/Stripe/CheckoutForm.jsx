import { Card } from "@material-ui/core";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useContext, useState } from "react";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Helpers/loader";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const CheckoutForm = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [isPayClicked, setPayClicked] = useState(false);
  const history = useHistory();
  const { subTotal, deliveryCharges } = useContext(ProductContext);

  //form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

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
        let { data } = await axios.post(
          "https://ecommerce-api04.herokuapp.com/api/pay",
          {
            id,
            amount: (subTotal + deliveryCharges) * 100,
            details: {
              firstName,
              lastName,
              email,
              address,
              city,
            },
          }
        );
        console.log(data);

        if (data.success === true) {
          setIsPaid(true);
          toast.dark("Payment Successful");
          setTimeout(() => {
            history.push("/");
          }, 5000);
        }
      } catch (err) {
        console.log(err);
        alert("There was an error processing payment");
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
  console.log(subTotal, deliveryCharges);
  return (
    <div className="container">
      <form className="checkout-form">
        <div className="row">
          <div class="input-field col s6">
            <input
              id="first_name"
              type="text"
              class="validate"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"
              class="validate"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label for="last_name">Last Name</label>
          </div>
          <div class="input-field col s12">
            <input
              id="email"
              type="text"
              class="validate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12">
            <input
              id="address"
              type="text"
              class="validate"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label for="address">Address</label>
          </div>
          <div class="input-field col s12">
            <input
              id="city"
              type="text"
              class="validate"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
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
          disabled={!stripe || isPayClicked}
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
