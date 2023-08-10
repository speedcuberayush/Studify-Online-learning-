import React from "react";
import "./styles/ProjectPreloader.css";

function ProjectPreloader({ name }) {
  return (
    <div className="projectPreloader">
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h1>
            {name}
            <span></span>
          </h1>
        </div>
        <div className="role">
          <div className="block"></div>
          <p> - by speedcuberAyush</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreloader;
