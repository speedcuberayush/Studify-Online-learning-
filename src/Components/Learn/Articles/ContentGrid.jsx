import React from "react";
import "./ContentGrid.css";
import { ChapterAIML, ChapterDAA, ChapterOS } from "../Chapters";
import { Link } from "react-router-dom";
const planData = [
  {
    iconClass: "ion-ios-world",
    title: "OS",
    price: "T313",
    type: "/theory",
    features: [
      "Introduction",
      "Process Management",
      "Deadlocks",
      "Device Management",
      "File Systems",
      "Protection | Networking in OS",
    ],
  },
  {
    iconClass: "ion-ios-people",
    title: "AIML",
    price: "H316",
    type: "/hybrid",
    features: [
      "Introduction",
      "Supervised Learning",
      "Regression & Classification",
      "Unsupervised Learning",
      "Clustering & Association",
      "Semi Supervised Learning",
    ],
  },
  {
    iconClass: "ion-ios-speedometer",
    title: "DAA",
    price: "H311",
    type: "/hybrid",
    features: [
      "Data Structures",
      "Performance Analysis",
      "Sorting",
      "D&C | Greedy | DP",
      "Backtrack | Branch & Bound",
      "Computational Complexity",
    ],
  },
];

// Reusable Plan component
function Plan({ iconClass, title, price, type, features }) {
  return (
    <div className="plan">
      <header>
        <i className={iconClass} />
        <h4 className="plan-title">{title}</h4>
        <div className="plan-cost">
          <span className="plan-price">{price}</span>
          <span className="plan-type">{type}</span>
        </div>
      </header>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="plan-select">
        <a href="#">Explore</a>
      </div>
    </div>
  );
}

function ContentGrid() {
  return (
    <div className="ContentGrid">
      <div className="snip1265">
        {planData.map((plan, index) => (
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
            }}  
            to={getChapterPath(plan.title)} // Pass the path as a string
            key={index}
          >
            <Plan key={index} {...plan} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function getChapterPath(title) {
  // Define the mapping of plan titles to chapter paths
  const chapterPathMap = {
    OS: "/ChapterOS", // Define the paths for your chapters
    AIML: "/ChapterAIML",
    DAA: "/ChapterDAA",
    // Add more mappings as needed
  };

  return chapterPathMap[title] || "/";
}

export default ContentGrid;
