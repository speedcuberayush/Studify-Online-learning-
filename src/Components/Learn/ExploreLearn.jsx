import React from "react";
import "./ExploreLearn.css";
import "./TrendingCouses.scss";

import tutBabbar from "../../Images/tutBabbar.png";
import tutClever from "../../Images/tutClever.png";
import tutGfx from "../../Images/tutGfx.png";
import tutHarry from "../../Images/tutHarry.png";

import Testimonials from "./Part1";
import Faqs from "./Part2";
import Part4 from "./Part4";
import Part5 from "./Part5";

import Footer from "../Footer";
function TrendingCourses() {
  return (
    <>
      <div
        className="TrendingwalaPart"
        style={{
          width: "100%",
          padding: "20px",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(30, 30, 35) ",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "40px" }}> EXPLORE NOW </h1>
        <div className="ExploreNow">
          <div className="carousel-wrapper">
            {/* abstract radio buttons for slides */}
            <input
              id="slide1"
              type="radio"
              name="controls"
              defaultChecked="checked"
            />
            <input id="slide2" type="radio" name="controls" />
            <input id="slide3" type="radio" name="controls" />
            <input id="slide4" type="radio" name="controls" />
            <input id="slide5" type="radio" name="controls" />
            {/* navigation dots */}
            <label htmlFor="slide1" className="nav-dot" />
            <label htmlFor="slide2" className="nav-dot" />
            <label htmlFor="slide3" className="nav-dot" />
            <label htmlFor="slide4" className="nav-dot" />
            <label htmlFor="slide5" className="nav-dot" />
            {/* arrows */}
            <label htmlFor="slide1" className="left-arrow">
              {" "}
              &lt;{" "}
            </label>
            <label htmlFor="slide2" className="left-arrow">
              {" "}
              &lt;{" "}
            </label>
            <label htmlFor="slide3" className="left-arrow">
              {" "}
              &lt;{" "}
            </label>
            <label htmlFor="slide4" className="left-arrow">
              {" "}
              &lt;{" "}
            </label>
            <label htmlFor="slide5" className="left-arrow">
              {" "}
              &lt;{" "}
            </label>
            <label htmlFor="slide1" className="right-arrow">
              {" "}
              &gt;{" "}
            </label>
            <label htmlFor="slide2" className="right-arrow">
              {" "}
              &gt;{" "}
            </label>
            <label htmlFor="slide3" className="right-arrow">
              {" "}
              &gt;{" "}
            </label>
            <label htmlFor="slide4" className="right-arrow">
              {" "}
              &gt;{" "}
            </label>
            <label htmlFor="slide5" className="right-arrow">
              {" "}
              &gt;{" "}
            </label>
            <div className="carousel">
              <ul>
                <li>
                  <img src={tutBabbar} alt="hi" />
                </li>
                <li>
                  <img src={tutHarry} alt="" />
                </li>
                <li>
                  <img src={tutGfx} />
                </li>
                <li>
                  <img src={tutClever} />
                </li>
                <li>
                  <img src={tutHarry} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function ExploreLearn() {
  return (
    <div className="exploreLearningpart">
      <div style={{ backgroundColor: "rgb(30,30,35)", width: "100%" }}>
        <TrendingCourses />
      </div>
      <div style={{ height: "100vh" }}>
        <Part5 />
      </div>
      {/* <div style={{ height: "20vh" }}>
        <Part4 />
      </div> */}
      <div className="Tareef">
        <h1
          style={{ textAlign: "center", marginTop: "50px", fontSize: "45px" }}
        >
          COURSES PROVIDERS
        </h1>
        <PARTNERSCARDS />
      </div>

      <div style={{ width: "100%" }}>
        <Faqs />
      </div>
      <div style={{ width: "100%" }}>
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default ExploreLearn;

function PARTNERSCARDS() {
  return (
    <div className="partnersCards">
      <div className="logo-container">
        <ul>
          <li>
            <div className="logo-holder logo-1">
              <a href="#">
                <h3>LINKEDIN</h3>
                <p>LEARNING</p>
              </a>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-2">
              <a href="#">
                <h3>ADOBE</h3>
                <p>CREATIVITY</p>
              </a>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-3">
              <a href="#">
                <h3>MICROSOFT</h3>
                <p>Azure</p>
              </a>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-4">
              <a href="#">
                <h3>Leetcode</h3>
                <p>Challenges</p>
              </a>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-5">
              <a href="#">
                <h3>google</h3>
                <p>cloud</p>
              </a>
            </div>
          </li>
          <li>
            <div className="logo-holder logo-6">
              <a href="#">
                <h3>
                  Open<span>AI</span>
                </h3>
              </a>
            </div>
          </li>
          <li>
            <div class="logo-holder logo-9">
              <a href="#">
                <h3>GFG</h3>
              </a>
            </div>
          </li>
          <li>
            <div class="logo-holder logo-10">
              <a href="#">
                <h3>FIVVER</h3>
                {/* <p>National geography</p> */}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
