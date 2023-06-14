import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Inventory from "/assets/inventory.json";
import Table from "/component/ProductDetailPage/ProductDetailPageTable.jsx";
import Gallery from "/component/ProductDetailPage/ProductDetailPageGallery.jsx";
import Copy from "/component/ProductDetailPage/ProductDetailCopy.jsx";
import "/component/ProductDetailPage/ProductDetailPage.css";

export default function ProductDetailPage(props) {
  const { addToCart, setselectedListingId } = props;
  const { listingId } = useParams(); // Get the listingId from the URL
  const [loadContent, setLoadContent] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Update loadContent when the location changes (page refresh)
    const updatedContent = Inventory.find(
      (item) => item.listingId.toString() === listingId
    );
    setLoadContent(updatedContent);
    setselectedListingId(listingId); // Invoke selectedListingId as a function
  }, [listingId, location, setselectedListingId]);

  // console.log(listingId);
  console.log(loadContent);

  if (!loadContent) {
    // Handle case when item is not found
    return <div>Item not found</div>;
  }

  return (
    <div className="listing">
      <Copy loadContent={loadContent} addToCart={addToCart} />
      <Gallery loadPhoto={loadContent.coverphoto} />
      <Table loadContent={loadContent} />
    </div>
  );
}
