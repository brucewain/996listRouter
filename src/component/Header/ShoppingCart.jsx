import "/component/Header/ShoppingCart.css";
import { useState, useEffect } from "react";
// import ShoppingCartCheckOut from "/component/Header/ShoppingCartCheckOut.jsx";
import inventory from "/assets/inventory.json";
import { Link } from "react-router-dom";


export default function ShoppingCart({
  cartItem,
  removeItem,
  clientSecret,
  options,
  stripePromise,
}) {
  const [cartVisible, setCartVisible] = useState(false);
  const openCart = () => {
    if (cartItem.length === 0) {
      return;
    }
    setCartVisible(!cartVisible);
  };


  const updateCart = (listingId) => {
    const displayCartItems = cartItem.map((listingId) => {
      const item = inventory.find((item) => item.listingId === listingId);

      if (item) {
        const { year, model, trim, price, mileage, coverphoto } = item;
        return { year, model, trim, price, mileage, coverphoto };
      }
      return null;
    });

    return (
      <div className="cart-item-parent">
        {displayCartItems.length < 1 ? (
          <div className="no-cart-items">No items in the cart.</div>
        ) : (
          displayCartItems.map((item, i) => (
            <div className="cart-item-child" key={i}>
              <img src={item.coverphoto} alt="" className="cart-item-image" />
              <div className="cart-item-copy">
                <p>{`${item.year} 911 Porsche ${item.trim}`}</p>

                <svg
                  onClick={() => removeItem(i)}
                  className="cart-item-trash"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 25 24.8"
                  // style={{"enable-background:new 0 0 25 24.8"}}
                  xmlpace="preserve"
                  data-ember-action=""
                  data-ember-action-1015="1015"
                >
                  <g className="trashcan-open">
                    <path d="M18.7,24.4H5.9L4.9,7h14.9L18.7,24.4z M7.6,22.6H17l0.8-13.7h-11L7.6,22.6z"></path>
                    <polygon points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 "></polygon>
                    <polygon points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 "></polygon>
                    <path
                      d="M19.1,0.7l-4.7,0.9l-0.8-1.4L8.2,1.3L8,3l-4.7,1l0.2,4.7l17.3-3.5L19.1,0.7z 
           
           M8.8,1.9l4.4 -1.0 l0.5,0.8
           L8.7,2.8z 
           
           M5.2,6.4l0-1L18,2.8l0.3,0.9L5.2,6.4z"
                    ></path>
                  </g>
                </svg>
              </div>
        
              <button> 
                <Link to="/CheckoutForm">Checkout</Link>
             
              </button>
            </div>
            
          ))

        )}
      </div>
    );
  };

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

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


  return (
    <div className="shoppingCart">
      <button onClick={openCart}>
        {" "}
        <svg
          width="22"
          height="20"
          className="cartSVG"
          xmlnsXlink="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="white"
            fillRule="nonzero"
          />
        </svg>
      </button>
      {cartItem.length > 0 ? (
        <div className="shoppingCartCounter">
          <p>{cartItem.length}</p>
        </div>
      ) : null}
      <div
        className="cartlist"
        style={{ display: cartVisible ? "block" : "none" }}
      >
       {message ? <Message message={message} /> : updateCart(cartItem)}

      
        
      </div>
    </div>
  );
}
