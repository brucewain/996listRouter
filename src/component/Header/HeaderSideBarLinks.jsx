import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "/component/Header/Header.css";
import { useState } from "react";

export default function HeaderSideBarLinks(props) {
  const { chassis, pages,setSelectModel } = props;
  const [menu, setMenu] = useState(false);
  const [menuButton, setMenuButton] = useState(
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#FFFFFF"
        fillRule="evenodd" // Updated attribute name
      />
    </svg>
  );

  const handleClickOpenBar = () => {
    if (!menu) {
      setMenu(true);
      setMenuButton(
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      );
      console.log("open");
    } else {
      setMenu(false);
      setMenuButton(
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#FFFFFF"
            fillRule="evenodd"
            color="black"
          />
        </svg>
      );
      console.log("close");
    }
  };

  const onUpdateState = (site) => {
  
setSelectModel(site)

  };

  const renderChassisList = () => {
    return chassis.map((site, i) => (
      <li className="chassislist-child" key={i}>
        <Link
          to={{
            pathname: `/ProductListingPage/${site.id}`,
            state: {
              siteModel: site.model,
              listingId: site.listingId,
            },
          }}
          onClick={() => {
            onUpdateState(site.id);
            handleClickOpenBar(); // Close the sidebar
          }}
        >
          {site.model}
        </Link>
      </li>
    ));
  };

  const renderPagesList = () => {
    return pages.map((site, i) => (
      <li className="pageslist-child" key={i}>
        <a href={site.url}>{site.title}</a>
      </li>
    ));
  };

 

  return (
    <div className="sidebar">
      <button onClick={handleClickOpenBar} className="menu sidebutton">
        {/* {menuButton} */}
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#FFFFFF"
        fillRule="evenodd" // Updated attribute name
      />
    </svg>
      </button>

      {menu && (
        <div className="navlist" id="navlist" style={{ display: "flex" }}>
          <div className="sidebar-icons">
            <button className="close" onClick={handleClickOpenBar}>
              {menuButton}
            </button>
            <img
              src="plistlogo.png"
              alt=""
              className="side-barlogo"
              id="side-barlogo"
            />
          </div>
          <nav>
            <ul className="chassislist-parent">{renderChassisList()}</ul>
            <ul className="pageslist-parent">{renderPagesList()}</ul>
          </nav>
        </div>
      )}
    </div>
  );
}

// HeaderSideBarLinks.propTypes = {
//   handleClickOpenBar: PropTypes.func.isRequired,
//   menuButton: PropTypes.node.isRequired,
//   menu: PropTypes.bool.isRequired,
//   onUpdateState: PropTypes.func.isRequired,
//   chassis: PropTypes.arrayOf(
//     PropTypes.shape({
//       model: PropTypes.string.isRequired,
//       listingId: PropTypes.number,
//     })
//   ).isRequired,
//   pages: PropTypes.arrayOf(
//     PropTypes.shape({
//       url: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
