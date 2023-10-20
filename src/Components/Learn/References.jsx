import React from "react";
import "./References.css";
import { Link } from "react-router-dom";

function ReferenceCard({
  title = "Sample title",
  description = "Sample Descriptioins",
}) {
  return (
    <div className="Referencecard">
      <div className="Referencecontent">
        <p className="Referenceheading">{title}</p>
        <p className="Referencepara">{description}</p>
        <button className="Referencebtn">Explore</button>
      </div>
    </div>
  );
}

function References() {
  return (
    <div className="References">
      <Link
        className="goBackwala"
        to="/ChapterAIML"
        style={{ textDecoration: "none" }}
      >
        <ReferenceCard title="AIML" description="Syllabus" />
      </Link>
      <Link
        className="goBackwala"
        to="/ChapterDAA"
        style={{ textDecoration: "none" }}
      >
        <ReferenceCard title="DAA" description="Syllabus" />
      </Link>
      <Link
        className="goBackwala"
        to="/ChapterOS"
        style={{ textDecoration: "none" }}
      >
        <ReferenceCard title="OS" description="Syllabus" />
      </Link>
      <a
        style={{ textDecoration: "none" }}
        href="https://overapi.com/"
        target="_blank"
      >
        <ReferenceCard title="Programming" description="official documents" />
      </a>
      <a
        style={{ textDecoration: "none" }}
        href="https://gate.iitkgp.ac.in/old_question_papers.html"
        target="_blank"
      >
        <ReferenceCard
          title="Gate Past Years"
          description="official documents"
        />
      </a>
      <a
        style={{ textDecoration: "none" }}
        href="https://react.dev/"
        target="_blank"
      >
        <ReferenceCard title="React JS" description="Learning" />
      </a>
    </div>
  );
}

export default References;
