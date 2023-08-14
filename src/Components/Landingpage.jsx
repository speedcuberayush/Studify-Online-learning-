import "./styles/Landingpage.css";
import Logo from "./Logo.jsx";
import React from "react";

export default function Landing() {
  return (
    <div className="landingpage">
      <div className="part1">
        <Logo />
      </div>
      <div className="part2">
        {/* typing text effects */}
        <p>WELCOME TO STUDIFY</p>
        <div class="animate-contain">
          <div class="animated-text">
            <span>Learning Reimagined</span>
            <span>Empowering Minds</span>
            <span>Enriching Futures</span>
            <span>A campus connection & community hub</span>
            <span>Your Gateway to Tech Brilliance</span>
          </div>
        </div>
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
        ©2023 STUDIFY™ All Rights Reserved
      </div>
    </div>
  );
}
