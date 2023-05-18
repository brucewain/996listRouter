import React from "react";
import "/css/Listing.css";
import { useLocation } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import LightGallery from "lightgallery/react";

// function Gallery({ sharedState }) {
//   const onInit = () => {
//     console.log("lightGallery has been initialized");
//   };
//   return (
//     <div className=" listingGalleryParent">
//       <LightGallery onInit={onInit} speed={500} >
//         {[...Array(9)].map((_, i) => (
//           <img
//             key={i}
//             src={sharedState.coverphoto}
//             alt=""
//             className="listingGallerChild"
//           />
//         ))}
//       </LightGallery>
//     </div>
//   );
// }

function Loading() {
  return <div>Loading...</div>;
}

function Table({ sharedState }) {
  const filteredKeys = [
    "coverphoto",
    "phonenumber",
    "sellername",
    "location",
    "url",
    "details1",
    "details2",
    "email",
    "phonenumber",
  ];
  const entries = Object.entries(sharedState).filter(
    ([key]) => !filteredKeys.includes(key)
  );

  return (
    <div className="specifications">
      <table>
        <thead>
          <tr>
            <th>
              <h4>Specifications</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, entry]) => (
            <tr className="tableKeyEntry" key={key}>
              <td>
                <p className="tableKey">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </p>
              </td>
              <td>
                <p className="tableEntry">{entry}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function buttonClick(e) {
  alert(e.target.innerText + " button clicked");
}

function Listing({ sharedState }) {
  const location = useLocation();
  console.log(location);
  console.log("Location:", location.state);

  const formattedPrice = sharedState.price.toLocaleString();
  if (!sharedState) {
    return <Loading />;
  }

  return (
    <div className="listing">
      <div className="titleCardParent">
        <img
          src={sharedState.coverphoto}
          alt="Product"
          className="coverPhoto titleCardChild"
        />
      </div>

      <div className="listingInformation">
        <div className="titleModel">
          <div className="titleHeading">
            <h1>
              Porsche {sharedState.model} {sharedState.trim}
            </h1>
            <h3>
              {sharedState.body}, {sharedState.year}
            </h3>
          </div>
          <div className="details">{sharedState.details1}</div>
        </div>

        <div className="priceButtons">
          <div className="price">
            <p>Price: </p>
            <h3 className="carPrice">${formattedPrice}</h3>
          </div>
          {/* <div className="saleButton"> */}
          <button className="addToCartButton " onClick={buttonClick}>
            <img
              src="https://www.freepnglogos.com/uploads/email-logo-png-27.png"
              alt=""
              className="buttonLogo"
            />
            ADD TO CART
          </button>
          <div className="sellerNameCity">
            <p style={{ color: "rgba(159, 86, 11, 0.91)" }}>Seller Details:</p>

            <p>Name: {sharedState.sellername}</p>
            <p>Location: {sharedState.location}</p>
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

          {/* </div> */}
        </div>
      </div>

      <ResponsiveMasonry
        className="listingGalleryParent"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry columnsCount={3} gutter={4}>
          {[...Array(9)].map((_, i) => (
            <img
              key={i}
              src={sharedState.coverphoto}
              alt=""
              className="listingGallerChild"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>


      <div className="detailsAndTable">
        <div className="details">{sharedState.details2}</div>

        <Table sharedState={sharedState} />
      </div>
    </div>
  );
}

export default Listing;
