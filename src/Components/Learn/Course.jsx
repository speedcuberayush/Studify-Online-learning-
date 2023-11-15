import React from "react";
import Coursecard from "./Coursecard";
import "./Courses.css";

function Course() {
  return (
    <div className="Coursepart">
      <div className="CourseSliderContent">
        <div className="cpCARDS">
          <Coursecard
            title="Design & Analysis of Algorithms"
            description="Master the art of designing and analyzing efficient algorithms to solve complex real-world problems in this comprehensive course"
            linked="DAA"
          />
          <Coursecard
            title="Artificial Intelligence & Machine Learning"
            description="Explore the frontiers of Artificial Intelligence and Machine Learning to develop intelligent systems and data-driven solutions in this cutting-edge course."
            linked="AIML"
          />
          <Coursecard
            title="Operating Systems"
            description="Dive into the principles of OS to understand how they manage hardware resources and provide a stable platform for software applications in this foundational course."
            linked="OS"
          />
          <Coursecard
            title="Introduction to Programming"
            description="Embark on your coding journey with this beginner-friendly course, offering an Introduction to Programming that equips you with the fundamental skills to create and analyze code"
            />
          <Coursecard
            title="Git | Github | Version Control"
            description="Master the art of version control and collaboration with Git and GitHub in this course, empowering you to streamline software development and teamwork."
            />
          <Coursecard
            title="React JS Development"
            description="Unlock the power of web development with React JS in this course, where you'll learn to build dynamic and interactive user interfaces for modern applications."
          />
        </div>
      </div>
    </div>
  );
}

export default Course;
