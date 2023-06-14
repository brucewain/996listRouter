import "/component/ProductDetailPage/ProductDetailPage.css";

export default function ProductDetailCopy(props) {
  const { loadContent, addToCart } = props;

  function buttonClick(e) {
    alert(e.target.innerText + " button clicked");
  }

  return (
    <>
      <div className="titleCardParent">
        <img
          src={loadContent.coverphoto}
          alt="Product"
          className="coverPhoto"
        />
      </div>

      <div className="listingInformation">
        <div className="title-details">
          <div className="title">
            <h1>
              Porsche {loadContent.model} {loadContent.trim}
            </h1>
            <h3>
              {loadContent.body}, {loadContent.year}
            </h3>
          </div>
          <p className="details"> {loadContent.details1}</p>
        </div>

        <div className="price-sellerContact">
          <div className="price">
            <div className="priceLine">
              <p>Price: </p>
              <h3 className="carPrice">${loadContent.price}</h3>
            </div>
            <button className="addToCartButton " onClick={addToCart}>
              {" "}
              {/* ADD TO CART EVENT */}
              {/* <img
                src="https://www.freepnglogos.com/uploads/email-logo-png-27.png"
                alt=""
                className="buttonLogo"
              /> */}
              ADD TO CART
            </button>
          </div>
          <div className="sellerContact">
            <div className="sellerNameCity">
              <p style={{ color: "rgba(159, 86, 11, 0.91)" }}>
                Seller Details:
              </p>

              <p>Name: {loadContent.sellername}</p>
              <p>Location: {loadContent.location}</p>
            </div>
            <button className="contactButton " onClick={buttonClick}>
              {" "}
              <img
                src="https://www.freepnglogos.com/uploads/email-logo-png-27.png"
                alt=""
                className="buttonLogo"
              />{" "}
              EMAIL
            </button>
            <button className="callButton " onClick={buttonClick}>
              {" "}
              <img
                src="https://www.freepnglogos.com/uploads/email-logo-png-27.png"
                alt=""
                className="buttonLogo"
              />{" "}
              CALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
