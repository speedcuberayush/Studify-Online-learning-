import React, { useState } from "react";
import "./styles/Home.css"; // Import your CSS file if needed
import { Link } from "react-router-dom";

function Home() {
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
              <Link to="/home" style={{ textDecoration: "None" }}>
                Home
              </Link>
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.15s" }}>
              <Link to="/learn" style={{ textDecoration: "None" }}>
                LEARN
              </Link>
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.2s" }}>
              <Link to="/explore" style={{ textDecoration: "None" }}>
                EXPLORE
              </Link>
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.25s" }}>
              <Link to="/aboutus" style={{ textDecoration: "None" }}>
                About us
              </Link>
            </a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.1s" }}>
              <Link to="/" style={{ textDecoration: "None" }}>
                Sign Out
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;