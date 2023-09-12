import React from "react";
import "./ExploreLearn.css";
import "./TrendingCouses.scss";

import tutBabbar from "../../Images/tutBabbar.png";
import tutClever from "../../Images/tutClever.png";
import tutGfx from "../../Images/tutGfx.png";
import tutHarry from "../../Images/tutHarry.png";
function TrendingCourses() {
  return (
    <>
      <div
        className="TrendingwalaPart"
        style={{
          width: "100%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(30, 30, 35) ",
        }}
      >
        <h1 style={{ color: "#fff" }}> EXPLORE NOW </h1>
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
      <TrendingCourses />
      <div className="Tareef">
        <h1 style={{ textAlign: "center" }}>COURSES PROVIDERS</h1>
        <div
          className="TareefCards"
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li style={{ padding: "20px" }}>LOGO1</li>
          <li style={{ padding: "20px" }}>LOGO2</li>
          <li style={{ padding: "20px" }}>LOGO3</li>
          <li style={{ padding: "20px" }}>LOGO4</li>
          <li style={{ padding: "20px" }}>LOGO5</li>
          <li style={{ padding: "20px" }}>LOGO6</li>
          <li style={{ padding: "20px" }}>LOGO7</li>
          <li style={{ padding: "20px" }}>LOGO8</li>
          <li style={{ padding: "20px" }}>LOGO9</li>
          <li style={{ padding: "20px" }}>LOGO10</li>
        </div>
      </div>
      <div
        className="featuresandbenifits"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center ",
          alignItems: "center",
        }}
      >
        <h1>FEATURES & BENIFITS</h1>
        <div
          className="featuresandbenifitscards"
          style={{
            width: "100%",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            border: "2px solid #000",
          }}
        >
          <div className="cardwalapart" style={{ border: "2px solid #000" }}>
            FEATURES
          </div>
          <div className="cardwalapart" style={{ border: "2px solid #000" }}>
            BENIFITS
          </div>
        </div>
      </div>
      <div className="testimonialsPart">
        <h1 style={{ textAlign: "center" }}>TESTIMONIALS</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li>TESTIMONIAL PART 1</li>
          <li>TESTIMONIAL PART 2</li>
          <li>TESTIMONIAL PART 3</li>
          <li>TESTIMONIAL PART 4</li>
          <li>TESTIMONIAL PART 5</li>
          <li>TESTIMONIAL PART 6</li>
          <li>TESTIMONIAL PART 7</li>
          <li>TESTIMONIAL PART 8</li>
          <li>TESTIMONIAL PART 9</li>
          <li>TESTIMONIAL PART 10</li>
        </ul>
      </div>
    </div>
  );
}

export default ExploreLearn;
