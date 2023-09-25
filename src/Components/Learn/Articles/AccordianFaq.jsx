import "./AccordianFaq.css";
import React, { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Check from "./Check";

const todoItems = [
  "Arrays",
  "Linked List",
  "Graph",
  "Tree",
  "BST",
  "Binary Tree",
  "Tries",
  "Heaps",
  "AVL Trees",
  "B Trees",
  "B+ Trees",
  "Hashmaps",
];
const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

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
          <Check todoItems={todoItems} />
        </p>
      </div>
    </div>
  );
};

const AccordianFaq = ({ title, faqs }) => {
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
        <h1 className="H1Accord">{title}</h1>
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
