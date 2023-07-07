import React from "react";    
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY='pk_test_51NEwFNDR8aBIUyKTl8gRMCo9EdoA4oVLsCqDrLhlezmExZh0ZlGVjldFIRP59MYtdURhWJStQ5WwmYIg16RGOpOC00o9NRkBPP'
const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer() {

return(

<Elements stripe={stripeTestPromise}>
    <PaymentForm />
</Elements>
)


}