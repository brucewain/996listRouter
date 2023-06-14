import "/component/Header/ShoppingCart.css";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function ShoppingCart(props) {
  // const { cart, openCart, cartButton, cartItem, updateCart } = props;
  const {cartItem, updateCart } = props;
  const [cart, setCart] = useState(false);

  const [cartButton, setCartButton] = useState(
    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill="white"
        fillRule="nonzero"
      />
    </svg>
  );
  const openCart = () => {
    if (!cart) {
      setCart(true);
      setCartButton(
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      );
      console.log("cart open");
    } else {
      setCart(false);
      setCartButton(
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="white"
            fillRule="nonzero"
          />
        </svg>
      );
      console.log("cart close");
    }
  }

  
  return (
    
    <div className="shoppingCart">
    <button onClick={openCart} className="shoppingCartButton">
      {cartButton}
    </button>

    {cartItem.length > 0 ? (
      <div className="shoppingCartCounter">
        <p>{cartItem.length}</p>
      </div>
    ) : null}
 


    {cart && (
      <ul className="cartlist">
        {/* <div className="rightside"> */}
        <div className="rightside-logo">
          <h3>Cart </h3>
          <button onClick={openCart} className="close-menu">
            {cartButton}
            {cartItem.model}
          </button>
        </div>
        {updateCart(cartItem)}
        <Link to="/CheckoutForm" className="buttonTest"  onClick={openCart}>CHECKOUT</Link>
        {/* <button>CHECKOUT</button> */}
        {/* </div> */}
      </ul>
    )}
     </div>
  );
}
