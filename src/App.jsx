import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";
import Header from "./component/Header/Header";
import Gallery from "./component/Landing/Gallery";
import Footer from "./component/Landing/Footer";
import About from "./component/Pages/About";
import History from "./component/Pages/History";
import FAQ from "./component/Pages/FAQ";
import Contact from "./component/Pages/Contact";
import Login from "./component/Pages/Login";
import Register from "./component/Pages/Register";
import inventory from "./assets/inventory.json";
import ProductDetailPage from "./component/ProductDetailPage/ProductDetailPage";
import ProductListingPage from "/component/ProductListingPage/ProductListingPage.jsx";
import PaymentCompletion from "/component/ProductDetailPage/PaymentCompletion.jsx";
import PaymentFailed from "/component/Checkoutform/PaymentForm.jsx";
import Inventory from "/assets/inventory.json";
import PaymentForm from "./component/Checkoutform/PaymentForm";
//Stripe

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "/component/Checkoutform/CheckoutForm.jsx";
import PaymentElement from "./component/Checkoutform/PaymentElement";


const stripePromise = loadStripe(
  "pk_test_51NEwFNDR8aBIUyKTl8gRMCo9EdoA4oVLsCqDrLhlezmExZh0ZlGVjldFIRP59MYtdURhWJStQ5WwmYIg16RGOpOC00o9NRkBPP"
);

function App() {
  const chassis = [
    { model: "Carrera", id: "Carrera" },
    { model: "4S", id: "C4S" },
    { model: "Turbo", id: "Turbo" },
    { model: "GT3", id: "GT3" },
    { model: "GT2", id: "GT2" },
  ];

  const pages = [
    { title: "About", url: "/About" },
    { title: "History", url: "/History" },
    { title: "FAQ", url: "/FAQ" },
    { title: "Contact", url: "/Contact" },
    { title: "Login", url: "/Login" },
    { title: "Register", url: "/Register" },
  ];

  const [sharedState, setSharedState] = useState(null);
  const [selectModel, setSelectModel] = useState(null);

  const [selectedListingId, setselectedListingId] = useState(null);
  const [cookies, setCookie] = useCookies(["cartItems"]); // initializing state cookies
  const [cartItem, setCartItem] = useState(cookies.cartItems || []);
  const [cartPrice, setCartPrice] = useState(1);

  const handleListingState = (state) => {
    setSharedState(state);
    console.log(state);
  };
  const selectListing = (item) => {
    setselectedListingId(item);
    console.log("item state: " + item);
  };

  const [state, setState] = useState({});

  useEffect(
    () => {
      // Retrieve state from local storage on component mount
      const savedState = JSON.parse(localStorage.getItem("state"));
      if (savedState) {
        setState(savedState);
      }
      // Save state to local storage whenever it changes
      localStorage.setItem("state", JSON.stringify(state));
    },
    [],
    [state]
  );

  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

  useEffect(
    () => {
      const listingPrices = cartItem.map((listingId) => {
        const listing = Inventory.find(
          (listing) => listing.listingId === listingId
        );
        return listing ? listing.price : null;
      });

      setCartPrice(
        listingPrices.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        )
      );
    },
    [cartItem],
    [removeItem]
  ); // Include cartItem and removeItem as dependencies

  const addToCart = () => {
    if (!selectedListingId) {
      return;
    }

    if (cartItem.includes(Number(selectedListingId))) {
      // Item already exists in the cart, handle the duplicate case (e.g., show an error message)
      // ...
      return console.log("duplicate");
    }

    const updatedCartItems = [...cartItem, Number(selectedListingId)];
    setCartItem(updatedCartItems);
    // ...
    // Rest of the code related to updating the cart items

    console.log(cartPrice);
  };

  function updateCart() {
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
              <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
            </div>
          ))
        )}
      </div>
    );
  }


  function removeItem(i) {
    const updatedCartItems = [...cartItem];
    updatedCartItems.splice(i, 1);
    setCartItem(updatedCartItems);
    setCookie("cartItems", updatedCartItems, { path: "/" });
  }

  const [clientSecret, setClientSecret] = useState("");



  const appearance = {
      theme: "flat",
      variables: {
        fontFamily: ' "Gill Sans", sans-serif',
        fontLineHeight: "1.5",
        borderRadius: "10px",
        colorBackground: "#F6F8FA",
        colorPrimaryText: "#262626",
      },
      rules: {
        ".Block": {
          backgroundColor: "var(--colorBackground)",
          boxShadow: "none",
          padding: "12px",
        },
        ".Input": {
          padding: "12px",
        },
        ".Input:disabled, .Input--invalid:disabled": {
          color: "lightgray",
        },
        ".Tab": {
          padding: "10px 12px 8px 12px",
          border: "none",
        },
        ".Tab:hover": {
          border: "none",
          boxShadow:
            "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
        },
        ".Tab--selected, .Tab--selected:focus, .Tab--selected:hover": {
          border: "none",
          backgroundColor: "#fff",
          boxShadow:
            "0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)",
        },
        ".Label": {
          fontWeight: "500",
        },
      },
  };

  const options = {
    mode: "payment",
    amount: cartPrice,
    currency: "usd",
    appearance,
  };

  return (
    <Router>
      <div className="App">
        <Header
          chassis={chassis}
          pages={pages}
          onUpdateState={handleListingState}
          sharedState={sharedState}
          selectedListingId={selectedListingId}
          onItemSelect={selectListing}
          cartItem={cartItem}
          updateCart={updateCart}
          selectModel={selectModel}
          setSelectModel={setSelectModel}
        />

        <CookiesProvider>
          <Routes>
            <Route
              path="/ProductListingPage/:model"
              element={
                <ProductListingPage
                  onItemSelect={selectListing}
                  inventory={inventory}
                  sharedState={sharedState}
                  chassis={chassis}
                  selectedListingId={selectedListingId}
                  selectModel={selectModel}
                  setSelectModel={setSelectModel}
                />
              }
            />
            <Route
              path="/ProductDetailPage/:listingId"
              element={
                <ProductDetailPage
                  sharedState={sharedState}
                  setselectedListingId={setselectedListingId}
                  onItemSelect={selectListing}
                  addToCart={addToCart}
                />
              }
            />
            <Route path="/" element={<Gallery />} />
            <Route exact path="/About" element={<About />} />
            <Route path="/History" element={<History />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/PaymentCompletion" element={<PaymentCompletion />} />
            <Route path="/PaymentFailed" element={<PaymentFailed />} />
            

            <Route
              path="/CheckoutForm"
              element={
                <Elements
                  stripe={stripePromise}
                  options={options}
                  clientSecret={clientSecret}
                  updateCart={updateCart}
                >
                  {/* <CheckoutForm
                    stripe={stripePromise}
                    options={options}
                    updateCart={updateCart}
                    cartPrice={cartPrice}
                    clientSecret={clientSecret}
                  /> */}
                  <PaymentForm       
                  // stripe={stripePromise}
                  //   options={options}
                    updateCart={updateCart}
                    cartPrice={cartPrice}
                    // clientSecret={clientSecret}
                    />

                </Elements>
              }
            />
          </Routes>

          <Footer to="./component/Footer" chassis={chassis} pages={pages} />
        </CookiesProvider>
      </div>
    </Router>
  );
}

export default App;
