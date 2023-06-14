import React from "react";
import "/component/ProductDetailPage/ProductDetailPage.css";
import 'react-masonry-css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ProductDetailPageGallery({ loadPhoto }) {
  // const { coverphoto } = loadPhoto

  return (
    <ResponsiveMasonry
      className="listingGalleryParent"
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
      <Masonry columnsCount={3} gutter="4" loadPhoto={loadPhoto} className="masonry">
        {[...Array(9)].map((_, i) => (
          <img
            key={i}
            src={`${loadPhoto}`} // Use the loadPhoto prop here
            alt=""
            className="listingGalleryChild"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
