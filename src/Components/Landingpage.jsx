import React from "react";
import "./styles/Landingpage.css";
import Logo from "./Logo.jsx";
export default function Landing() {
  return (
    <div className="landingpage">
      <div className="part1">header</div>
      <div className="part2">
        {/* typing text effects */}
        <Logo />
        <ul>
          <li>Learning Reimagined: Welcome to STUDIFY</li>
          <li>Empowering Minds, Enriching Futures</li>
          <li>A campus connection and community platform</li>
          <li>Your Gateway to Tech Brilliance.</li>
        </ul>
      </div>
      <div className="part3">buttons</div>
      <div className="part4">
        {/* footer */}
        <ul>
          <li>social medias</li>
          <li> ©2023 STUDIFY™ All Rights Reserved.</li>
        </ul>
      </div>
    </div>
  );
}
