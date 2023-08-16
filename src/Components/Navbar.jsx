import React from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";

import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ChatBubble from "@mui/icons-material/ChatBubble";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function NavbarOptions({ icon, to, text }) {
  return (
    <IconButton size="large" className="navbarItems">
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "#0096ff" } : { color: "#fff" };
        }}
        to={to}
        activeClassName="activeNav"
        isActive={(match, location) => {
          // Custom logic to determine if the link should be considered active
          if (!match) return false;
          return location.pathname === to;
        }}
      >
        {icon}
      </NavLink>
    </IconButton>
  );
}

function Navbar() {
  return (
    <div className="navbarcontainer">
      <div className="navbar">
        <NavbarOptions icon={<ExploreIcon />} to="/" text="Explore" />
        <NavbarOptions icon={<MenuBookIcon />} to="/navbar" text="Login" />
        <NavbarOptions icon={<ChatBubble />} to="/login" text="Chat" />
        <NavbarOptions
          icon={<SentimentSatisfiedAltIcon />}
          to="/emotions"
          text="Emotions"
        />
        <NavbarOptions icon={<CodeIcon />} to="/transition" text="Code" />
        <NavbarOptions icon={<InfoIcon />} to="/info" text="Info" />
        <NavbarOptions
          icon={<AccountCircleIcon />}
          to="/profile"
          text="Profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
