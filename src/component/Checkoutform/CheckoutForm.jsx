import React, { useState, useEffect } from "react";
import "./Checkout.css";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ updateCart, cartItem, cartPrice, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    
    if (!stripe || !elements || !clientSecret) {
      return;
    }
  
    setIsLoading(true);
  
    const { error } = await stripe.confirmPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(PaymentElement),
        // Add any additional payment method data if required
      },
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173/PaymentCompletion",
      },
    });
  
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Payment succeeded!");
    }
  
    setIsLoading(false);
  };
  

  return (
    <div className="checkoutpage">
      <div className="checkoutpage-parent">
        {updateCart(cartItem)}

        <form onSubmit={handleSubmit} className="checkoutpage-items">
          <PaymentElement id="payment-element" />
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="checkoutpage-button"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                <p> Pay {"$" + cartPrice}</p>
              )}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
