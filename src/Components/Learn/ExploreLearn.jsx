import React from "react";
import "./ExploreLearn.css";
function ExploreLearn() {
  return (
    <div className="exploreLearningpart">
      <div
        className="TrendingCourses"
        style={{ width: "100%", height: "80vh" }}
      >
        TRENDING COURSES
        <div className="boxed" style={{ border: "2px solid #000" }}>
          COURSES SLIDER
        </div>
      </div>
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