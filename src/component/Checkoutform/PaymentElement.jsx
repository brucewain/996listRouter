import {useEffect, useState} from "react";
import { loadStripe } from "@stripe/stripe-js";

export default function PaymentElement(props) {
    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {
        fetch('/config').then(async(r)=> {
            const {publishableKey} = await r.json();
            console.log(publishableKey);
        })


    }, []);

    return (
        <div>
            <h1>Payment Element</h1>
        </div>
    );


}