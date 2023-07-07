import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import StripeContainer from "./StripeContainer";
import './Checkout.css'
import CheckoutForm from "/component/Checkoutform/CheckoutForm.jsx";


const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: { iconColor: "#ffc7ee", color: "#ffc7ee" },
  },
};

export default function PaymentForm({cartPrice, updateCart, cartItem }) {
  
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5173/payment", {
          amount: cartPrice * 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    } else {
      console.log("Error: " + error);
    }
  };

  return (
    <>
      {!success ? (
        <>
          {updateCart(cartItem)}
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
                {/* <StripeContainer /> */}
              </div>
            </fieldset>
            <button>Pay ${cartPrice}</button>
          </form>
        </>
      ) : (
        <div>
          <h2>Thank you for your payment</h2>
        </div>
      )}
    </>
  );
}
