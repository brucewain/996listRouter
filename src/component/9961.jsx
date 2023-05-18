import React from "react";
import "/css/P9961.css";
import Inventory from "/assets/inventory.json";
import { Link, useLocation } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


export default function P9961({ onUpdateState }) {
 
  const location = useLocation();
  // const searchParams = new URLSearchParams(location.pathname).get("9961");
  const chassisCode = location.pathname
  console.log(location);
  console.log(chassisCode);

  const handleItemClick = (index) => {
    const selectedItem = Inventory[index];
    console.log("Selected Index:", index);
    console.log("Selected Item:", selectedItem);
    onUpdateState(selectedItem); // Update the shared state
  };

  return (
  //   <ResponsiveMasonry
  //   className="inventory-list"
  //   columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3,2560:4 }}
  // >
  //   <Masonry columnsCount={3} >
   <div className="inventory-list"> 
      {Inventory.map((item, index) => (
        <Link
          className="P9961-parent"
          key={index}
          to={{
            pathname: "/listing",
            state: { selectedItemIndex: index },
          }}
          onClick={() => handleItemClick(index)}
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
      ))}
    </div> 
    // </Masonry>
    //   </ResponsiveMasonry>

  );
}
