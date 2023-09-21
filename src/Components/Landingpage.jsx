import "./styles/Landingpage.css";
import Logo from "./Logo.jsx";
import React from "react";

import { Link } from "react-router-dom";

import Footer from "./Footer.jsx";

export default function Landing() {
  return (
    <>
      <div className="landingpage">
        <div className="part1">
          <Logo />
        </div>
        <div className="part2">
          {/* typing text effects */}
          <div className="mainAnimator">
            <h1 className="headingClasswlaa">
              <span className="maintxt">Your Learning Adventure Begins:</span>{" "}
              <div className="roller">
                <span id="rolltext">
                  Unleash Your Potential with Knowledge
                  <br />
                  Innovation and Growth Await
                  <br />
                  Charting a Path to Success
                  <br />
                  {/* Embrace Learning,
                <br /> */}
                  Explore, Learn, Thrive
                  <br />
                  Embrace Excellence
                  <br />
                  <br />
                </span>
              </div>
            </h1>
          </div>
        </div>
        <div className="part3">
          <div className="BTNcontainer">
            <div className="btn">
              <a href="#">
                <Link to="/login">LOGIN/ SIGNUP</Link>
              </a>
            </div>
            <div className="btn">
              <a href="#">
                <Link to="/home">DOWNLOAD NOW</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="part4">
          {/* footer */}
          <Footer />
          <p>©2023 STUDIFY™ All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
