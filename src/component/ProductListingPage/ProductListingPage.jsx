import React from "react";
import Inventory from "/assets/inventory.json";
import { Link } from "react-router-dom";
import "/component/ProductListingPage/Listing.css";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ProductListingPage(props) {
  const { onItemSelect, selectModel, setSelectModel } = props;
  const { model } = useParams();
  const location = useLocation();

  useEffect(() => {
    setSelectModel(model); // Invoke selectedListingId as a function
    console.log(selectModel);
  }, [model, location]);

  //This filters the Inventory JSON by the selected model
  const filteredInventory = (selectModel) => {

    const filteredItems = Inventory.filter(
      (item) => item.chassisCode === selectModel
    );
    console.log(filteredItems);

    return filteredItems.map((item, index) => (
      <Link
        className="P9961-parent"
        key={index}
        to={{
          pathname: `/ProductDetailPage/${item.listingId}`,
          state: { listingItem: item.listingId },
        }}
        onClick={() => onItemSelect(item)}
      >
        <div
          className="P9961-child"
          style={{ backgroundImage: `url(${item.coverphoto})` }}
        >
          <p>
            {item.year} Porsche {item.model}
          </p>
        </div>
      </Link>
    ));
  };

  return (
    <div>
      {filteredInventory(selectModel).length > 0 ? (
        <ResponsiveMasonry
          className="inventory-list"
          columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
        >
          <Masonry columnsCount={4}>{filteredInventory(selectModel)}</Masonry>
        </ResponsiveMasonry>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}
