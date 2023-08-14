import "./styles/Landingpage.css";
import Logo from "./Logo.jsx";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footerpart">
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
      <LinkedInIcon />
      <EmailIcon />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="landingpage">
      <div className="part1">
        <Logo />
      </div>
      <div className="part2">
        {/* typing text effects */}
        <p style={{ fontSize: "50px", color: "#0096ff" }}>WELCOME TO STUDIFY</p>
      </div>
      <div className="part3">
        <div className="container">
          <div className="btn">
            <a href="#">LOGIN/ SIGNUP</a>
          </div>
          <div className="btn">
            <a href="#">DOWNLOAD </a>
          </div>
        </div>
      </div>
      <div className="part4">
        {/* footer */}
        <Footer />
        <p>©2023 STUDIFY™ All Rights Reserved</p>
      </div>
    </div>
  );
}
