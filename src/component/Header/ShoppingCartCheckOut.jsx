import React from "react";
import { useState, useEffect } from "react";


const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

export default function ShoppingCartCheckOut({ cartItem, updateCart }) {

    const [message, setMessage] = useState(""); 

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
    
        if (query.get("success")) {
          setMessage("Order placed! You will receive an email confirmation.");
        }
    
        if (query.get("canceled")) {
          setMessage(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);

  return message ? ( <Message message={message} />) : updateCart(cartItem);
}
