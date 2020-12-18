import { Card } from "@material-ui/core";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.dark("Payment Successful");
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
          //   toast("Payment Successful");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const iframeStyles = {
    base: {
      color: "black",
      fontSize: "20px",
      iconColor: "#fff",
      "::placeholder": {
        color: "black",
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
  return (
    <div className="container">
      <form style={{ maxWidth: 400, margin: "0 auto" }}>
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
        {/* <ToastContainer /> */}
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
