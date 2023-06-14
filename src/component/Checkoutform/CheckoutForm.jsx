import React, { useState } from "react";
import "./Checkout.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ updateCart, cartItem, cartPrice, cartTotal, options }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements) {
      return;
    }

    try {
      const { error: submitError } = await elements.getElement("payment").confirm();

      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      const res = await fetch("/create-intent", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to create PaymentIntent");
      }

      const { client_secret: clientSecret } = await res.json();

      const { error } = await stripe.confirmPayment(clientSecret, {
        payment_method: {
          card: elements.getElement("card"),
        },
        return_url: "https://example.com/order/123/complete",
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="checkoutpage">
      <div className="checkoutpage-parent">
        {updateCart(cartItem)}

        <form onSubmit={handleSubmit} className="checkoutpage-items">
          <div id="payment-element">
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="card-element">Card Details</label>
              <div id="card-element">
                <CardElement />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="checkoutpage-button"
            disabled={!stripe || !elements}
          >
            <p>Pay</p>
            <p>{"$" + cartPrice}</p>
          </button>

          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
