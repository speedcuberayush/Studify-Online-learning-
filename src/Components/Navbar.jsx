import React, { useState, useEffect, useRef } from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [indicatorStyles, setIndicatorStyles] = useState({});
  const items = [
    { text: "A", path: "", color: "#0096ff", ref: useRef(null) },
    { text: "B", path: "login", color: "#0096ff", ref: useRef(null) },
    { text: "C", path: "chat", color: "#0096ff", ref: useRef(null) },
    { text: "D", path: "aboutus", color: "#0096ff", ref: useRef(null) },
    { text: "E", path: "", color: "#0096ff", ref: useRef(null) },
    { text: "F", path: "", color: "#0096ff", ref: useRef(null) },
    { text: "G", path: "", color: "#0096ff", ref: useRef(null) },
  ];

  const indicatorRef = useRef(null);

  useEffect(() => {
    if (activeItem) {
      const el = activeItem.ref.current;
      if (el) {
        const newStyles = {
          width: `${el.offsetWidth}px`,
          left: `${el.offsetLeft}px`,
          backgroundColor: el.getAttribute("data-active-color"),
        };
        setIndicatorStyles(newStyles);
      }
    }
  }, [activeItem]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="mainNavbar">
      <button data-text="Awesome" class="LOGObtn">
        <span class="actual-text">&nbsp;STUDIFY&nbsp;</span>
        <span class="hover-text" aria-hidden="true">
          &nbsp;STUDIFY&nbsp;
        </span>
      </button>

      <div className="badaNav">
        <div className="Navigationwala">
          <nav className="nav">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.path}`} // Update the URL path as needed
                className={`nav-item ${activeItem === item ? "is-active" : ""}`}
                data-active-color={item.color}
                ref={item.ref}
                onClick={() => handleItemClick(item)}
                style={{ color: activeItem === item ? item.color : "" }}
              >
                {item.text}
              </NavLink>
            ))}
            <span
              className="nav-indicator"
              style={{
                ...indicatorStyles,
                position: "absolute",
                bottom: "0",
              }}
              ref={indicatorRef}
            ></span>
          </nav>
        </div>
      </div>

      <div className="BTNpart3">
        <div className="SignOUTwala">
          <NavLink to="/">
            <button class="Btn">
              <div class="butnsign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div class="text">Logout</div>
            </button>
          </NavLink>
        </div>

        <NavLink to="/" style={{ textDecoration: "None" }}>
          <button className="PremBTN">
            Premium
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
        </NavLink>
        {/* <div id="premium">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow" />
            </span>
            <span className="button-text">Go Premium</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
