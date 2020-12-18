import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   return (
//     <div className="container">
//       <form>
//         <CardElement />
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

const stripePromise = loadStripe(
  "pk_test_51HzeuECBsWlpmphNDyHtmcwADf4SEDUDQM85TryN4Fqp1ZpeP20aWBHLtpAvV6ddCn6xhCUGorhq2FyfMZFk2caj00V2fZ03bq"
);

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;
