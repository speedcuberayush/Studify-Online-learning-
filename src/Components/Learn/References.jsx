import React from "react";
import "./References.css";

function ReferenceCard({
  title = "Sample title",
  description = "Sample Descriptioins",
}) {
  return (
    <div className="Referencecard">
      <div className="Referencecontent">
        <p className="Referenceheading">{title}</p>
        <p className="Referencepara">{description}</p>
        <button className="Referencebtn">Read more</button>
      </div>
    </div>
  );
}

function References() {
  return (
    <div className="References">
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
      <ReferenceCard />
    </div>
  );
}

export default References;
