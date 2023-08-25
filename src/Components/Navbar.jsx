import React, { useState, useEffect, useRef } from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import InfoIcon from "@mui/icons-material/Info";
import SmartToyIcon from "@mui/icons-material/SmartToy";
function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [indicatorStyles, setIndicatorStyles] = useState({});
  const items = [
    {
      text: <MenuBookIcon />,
      path: "learn",
      color: "#0096ff",
      ref: useRef(null),
    },
    {
      text: <ExploreIcon />,
      path: "explore",
      color: "#0096ff",
      ref: useRef(null),
    },
    { text: <ChatIcon />, path: "chat", color: "#0096ff", ref: useRef(null) },
    {
      text: <SmartToyIcon />,
      path: "ai",
      color: "#0096ff",
      ref: useRef(null),
    },
    {
      text: <CodeIcon />,
      path: "transition",
      color: "#0096ff",
      ref: useRef(null),
    },
    {
      text: <DriveFileRenameOutlineIcon />,
      path: "test",
      color: "#0096ff",
      ref: useRef(null),
    },
    {
      text: <InfoIcon />,
      path: "aboutus",
      color: "#0096ff",
      ref: useRef(null),
    },
  ];

  const indicatorRef = useRef(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchingItem = items.find((item) => `/${item.path}` === currentPath);
    if (matchingItem) {
      setActiveItem(matchingItem);
    }
  }, []);

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
    <>
      <div className="mainNavbar">
        <NavLink to="/" style={{ textDecoration: "None" }}>
          <button
            data-text="Awesome"
            class="LOGObtn"
            style={{ cursor: "pointer" }}
          >
            <span class="actual-text">&nbsp;STUDIFY&nbsp;</span>
            <span class="hover-text" aria-hidden="true">
              &nbsp;STUDIFY&nbsp;
            </span>
          </button>
        </NavLink>
        <div className="badaNav">
          <div className="Navigationwala">
            <nav className="nav">
              {items.map((item, index) => (
                <NavLink
                  key={index}
                  exact
                  to={`/${item.path}`}
                  className={`nav-item ${
                    activeItem === item ? "is-active" : ""
                  }`}
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
            <NavLink to="/login">
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
            <button className="PremBTN" style={{ cursor: "pointer" }}>
              Premium
              <div class="arrow-wrapper">
                <div class="arrow"></div>
              </div>
            </button>
          </NavLink>

        </div>
      </div>
    </>
  );
}

export default Navbar;
