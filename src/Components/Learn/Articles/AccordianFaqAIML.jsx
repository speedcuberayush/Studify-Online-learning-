import "./AccordianFaq.css";
import React, { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Check from "./Check";
import AAbutton from "./AAbutton";

const todoItems1 = [
  "Concept of AI",
  "Histroy of AI",
  "Current Status and Scope",
  "Agents and Environments",
  "Problem Formulation",
  "Review of Tree and Graph",
  "Search Graph and Search Tree",
  "Problem solving using Searching ALgorithms",
  "UNINFORMED SEARCH: BFS & DFS",
  "UNINFORMED SEARCH: A* , AO* & NLP",
];

const todoItems2 = [
  "ML scope",
  "Limitations and models",
  "regression, probability & statistics",
  "Linear Algebra for ML",
  "Convex Optimization",
  "Data visualization",
  "Hypothesis Function & Testing",
  "Data Distribution, Data Preprocessing",
  "Data Augumentation",
  "Normailization",
];
const todoItems3 = [
  "Linear Regression",
  "Multiple Regression",
  "Bias Variance - Tradeoff",
  "Model Validation Approaches",
  "Evaluation of Performance",
  "Confusion Matrix",
  "MSE, RMSE, R-squared",
];
const todoItems4 = [
  "Logistic Regression",
  "support vector machine",
  "Navie Basis ALgorithm",
  "KNN",
  "Decision Tree",
  "Decision Tree and Random Forest",
  "Overfitting and Underfitting",
  "Noisy data and pruning",
  "Ensemble Learning",
];
const todoItems5 = [
  "Clustering",
  "Partitioning",
  "K-mean | K-mediod",
  "Evaluation of Clustering Algorithms",
  "Agglomeratice and divisive clustering",
  "Evaluation of Clustering Algorithm",
  "Association Rules",
  "Eigen Values and Vectors",
];
const todoItems6 = [
  "Introduction",
  "Assumptions",
  "Working and Real World",
  "Reinforment Learning",
  "Elements",
  "Algorithms",
];

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text, todoListId } = faq;

  const getTodoItems = () => {
    switch (todoListId) {
      case 1:
        return todoItems1;
      case 2:
        return todoItems2;
      case 3:
        return todoItems3;
      case 4:
        return todoItems4;
      case 5:
        return todoItems5;
      case 6:
        return todoItems6;

      default:
        return [];
    }
  };

  return (
    <div className="rc-accordion-card">
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">
          <ExpandMoreIcon />
        </span>
      </header>
      <div
        ref={contentEl}
        className={`ArtiCollapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>
          <Check todoItems={getTodoItems()} />
        </p>
      </div>
    </div>
  );
};

const AccordianFaq = () => {
  const faqs = [
    {
      id: 1,
      header: "Introduction to AI",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 1,
    },
    {
      id: 2,
      header: "Maching Learning",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 2,
    },
    {
      id: 3,
      header: "Supervised Learning - I",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 3,
    },
    {
      id: 4,
      header: "Supervised Learning - II",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 4,
    },
    {
      id: 5,
      header: "Unsupervised Learning",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 5,
    },
    {
      id: 6,
      header: "Semi-Supervised Learning",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 6,
    },
  ];

  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div className="AccoridianFaq">
      <article className="AccoridanArti">
        <AAbutton />

        <h1 className="H1Accord">
          ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
        </h1>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          );
        })}
      </article>
    </div>
  );
};

export default AccordianFaq;
