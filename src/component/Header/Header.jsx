import PropTypes from "prop-types";
import "/component/Header/Header.css";
import ShoppingCart from "./ShoppingCart";
import HeaderSideBarLinks from "./HeaderSideBarLinks";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { addToCart, cartItem, selectedListingId, updateCart, removeItem, clientSecret, options, stripePromise,
  setSelectModel } = props;

  return (
    <div className="header">
      <HeaderSideBarLinks chassis={props.chassis} pages={props.pages} setSelectModel={setSelectModel}/>
      <Link to="/">
        <img
          src="/images/plistlogo.png"
          alt=""
          className="spanTest"
          id="side-barlogo"
        />
      </Link>

      <ShoppingCart
        chassislist
        addToCart={addToCart}
        cartItem={cartItem}
        selectedListingId={selectedListingId}
        updateCart={updateCart}
        //new
        removeItem={removeItem}
clientSecret={clientSecret}
options={options}
stripe={stripePromise}
      />
    </div>
  );
};

Header.propTypes = {
  onUpdateState: PropTypes.func.isRequired,
  chassis: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
};

export default Header;

