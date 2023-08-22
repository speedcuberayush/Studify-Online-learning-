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
      
      <div id="premium">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow" />
          </span>
          <span className="button-text">Go Premium</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
