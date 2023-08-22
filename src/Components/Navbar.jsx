import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
  IconButton,
} from "@mui/material";
import { Home, Info, Chat, School } from "@mui/icons-material";

const pages = [
  { label: "Home", icon: <Home />, link: "/" },
  { label: "About Us", icon: <Info />, link: "/aboutus" },
  { label: "Chat", icon: <Chat />, link: "/chat" },
  { label: "Learn", icon: <School />, link: "/learn" },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavBar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar style={{ position: "fixed", top: 0 }}>
          <Toolbar>
            <Typography variant="h6">My Website</Typography>
            {pages.map((page) => (
              <Link
                key={page.label}
                to={page.link}
                style={{ textDecoration: "none", color: "white" }}
              >
                <IconButton
                  color={activePage === page.link ? "secondary" : "inherit"}
                >
                  {page.icon}
                </IconButton>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* For ensuring content starts below the fixed navbar */}
    </React.Fragment>
  );
}

export default NavBar;
