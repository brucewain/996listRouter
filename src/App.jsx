import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from "./component/Header";
import Gallery from "./module/Gallery";
import Footer from "./component/Footer";
import About from "./component/About";
import History from "./component/History";
import FAQ from "./component/FAQ";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";
import P9961 from "./component/9961";
import P9962 from "./component/9962";
import C4S from "./component/C4S";
import Turbo from "./component/Turbo";
import GT3 from "./component/GT3";
import GT2 from "./component/GT2";
import Listing from "./component/listing";
import inventory from "./assets/inventory.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import ProductListingPage from '/component/ProductListingPage';

function App() {
  const chassis = [
    { model: "product listing test", url: "/ProductListingPage" },
    { model: "996.1", url: "/9961" },
    { model: "996.2", url: "/9962" },
    { model: "4S", url: "/C4S" },
    { model: "Turbo", url: "/Turbo" },
    { model: "GT3", url: "/GT3" },
    { model: "GT2", url: "/GT2" },
  ];

  const pages = [
    { title: "Home Test", url: "/" },
    { title: "About", url: "/About" },
    { title: "History", url: "/History" },
    { title: "FAQ", url: "/FAQ" },
    { title: "Contact", url: "/Contact" },
  ];

  const [sharedState, setSharedState] = useState(null);

  const handleListingState = (state) => {
    setSharedState(state);
  };

  const [state, setState] = useState({});

  // Retrieve state from local storage on component mount
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("state"));
    if (savedState) {
      setState(savedState);
    }
  }, []);

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);


  return (
    <Router>
      <div className="App">
        <Header to="./component/Header" chassis={chassis} pages={pages}  onUpdateState={handleListingState} sharedState={sharedState}/>

        <CookiesProvider>
          <Routes>
            <Route path="/"   element={<Gallery />} />
            <Route exact path="/About" element={<About />} />
            <Route path="/History" element={<History />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route
              path="/ProductListingPage"
              element={<ProductListingPage inventory={inventory} onUpdateState={handleListingState} />}
            />
            <Route
              path="/9961"
              state="996.1"
              element={<P9961 inventory={inventory} onUpdateState={handleListingState} />}
            />
            
            <Route
              path="/9962"
              element={<P9962 inventory={inventory} />}
            />
            <Route
              path="/C4S"
              element={<C4S inventory={inventory} />}
            />
            <Route
              path="/Turbo"
              element={<Turbo inventory={inventory} />}
            />
            <Route
              path="/GT3"
              element={<GT3 inventory={inventory} />}
            />
            <Route
              path="/GT2"
              element={<GT2 inventory={inventory} />}
            />
           <Route path="/listing" element={<Listing inventory={inventory} sharedState={sharedState} />} />

          </Routes>

          <Footer to="./component/Footer" chassis={chassis} pages={pages} />
        </CookiesProvider>
      </div>
    </Router>
  );
}

export default App
