import "./styles/Landingpage.css";
import Logo from "./Logo.jsx";
import React from "react";

export default function Landing() {
  return (
    <div className="landingpage">
      <div className="part1">header</div>
      <div className="part2">
        {/* typing text effects */}
        <Logo />
      </div>
      <div className="part4">
        {/* footer */}
        ©2023 STUDIFY™ All Rights Reserved
      </div>
    </div>
  );
}
