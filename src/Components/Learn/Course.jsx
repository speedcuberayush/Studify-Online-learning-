import React from "react";
import Coursecard from "./Coursecard";
import "./Courses.css";

function Course() {
  return (
    <div className="Coursepart">
      <div className="Coursepart1">
        <h2 className="cpHEADING" style={{marginBottom:"10px"}}>TRENDING COURSES</h2>
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
        </div>
      </div>
      <div className="cp Coursepart2">GATE</div>
      <div className="cp Coursepart3">DSA</div>
      <div className="cp Coursepart4">DSA PRACTICE</div>
      <div className="cp Coursepart5">COLLEGE</div>
      <div className="cp Coursepart6">EDITING</div>
      <div className="cp Coursepart7">ONE SHOTS</div>
      <div className="cp Coursepart8">PROJECTS</div>
    </div>
  );
}

export default Course;
