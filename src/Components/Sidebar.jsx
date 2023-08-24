import React, { useState } from "react";
import "./styles/Sidebar.css"; // Import your CSS file if needed
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`SideBar ${isActive ? "active" : ""}`}>
      <div className="navbarHomewala">
        <div className="menu">
          <h3 className="logo">
            STUD<span>IFY</span>
          </h3>
          <div className="hamburger-menu" onClick={handleHamburgerClick}>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div className="puraPart-SideBar">
        <div className="puraPart">
          <header className="sirmtlbheader">
            <div className="aisehiclass">
              <h2 className="title">Future is here</h2>
              <p className="description">
                “All our dreams can come true, if we have the courage to pursue
                them.”
              </p>

              <a
                href="#"
                className="linkwalabutton"
                onClick={handleHamburgerClick}
              >
                EXPLORE
              </a>
            </div>
          </header>
        </div>
        <div className="parchai ek"></div>
        <div className="parchai doo"></div>
      </div>
      <div className="linkTo">
        <ul>
          <li className="active">
            <a href="#" style={{ "--i": "0.05s" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.15s" }}>
              LEARN
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.2s" }}>
              EXPLORE
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.25s" }}>
              About us
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.1s" }}>
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
