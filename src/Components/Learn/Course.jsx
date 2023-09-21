import React from "react";
import Coursecard from "./Coursecard";
import "./Courses.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function CourseSlider({ Header = "Course Title" }) {
  return (
    <div className="CourseSlider">
      <div className="CourseSliderHeader">
        <ArrowCircleLeftIcon style={{ color: "#fff" }} />
        <h2 className="cpHEADING" style={{ marginBottom: "10px" }}>
          {Header}
        </h2>
        <ArrowCircleRightIcon style={{ color: "#fff" }} />
      </div>

      <div className="CourseSliderContent">
        <div className="cpCARDS">
          <Coursecard />
          <Coursecard />
          <Coursecard />

          <Coursecard />
          <Coursecard />
          <Coursecard />

          <Coursecard />
          <Coursecard />
          <Coursecard />

          <Coursecard />
          <Coursecard />
          <Coursecard />

          <Coursecard />
          <Coursecard />
          <Coursecard />
        </div>
      </div>
    </div>
  );
}

function Course() {
  return (
    <div className="Coursepart">
      <div className="Coursepart1">
        <CourseSlider Header="TRENDING" />
      </div>
      <div className="Coursepart2">
        <CourseSlider Header="DSA" />
      </div>
      <div className="Coursepart3">
        <CourseSlider Header="DEVELOPMENT" />
      </div>
      <div className="Coursepart4">
        <CourseSlider Header="GATE" />
      </div>
      <div className="Coursepart5">
        <CourseSlider Header="TRENDING" />
      </div>
      <div className="Coursepart6">
        <CourseSlider Header="COLLEGE" />
      </div>
      <div className="Coursepart7">
        <CourseSlider Header="DESIGNING" />
      </div>
      <div className="Coursepart8">
        <CourseSlider Header="COLLEGE" />
      </div>
    </div>
  );
}

export default Course;
