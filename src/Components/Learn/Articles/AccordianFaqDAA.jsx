import "./AccordianFaq.css";
import React, { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Check from "./Check";
import AAbutton from "./AAbutton";

const todoItems1 = [
  "Designing and analyzing algorithms",
  "Time and Space complexity",
  "Average and worst-case Analysis",
  "Asymptotic notations",
  "Recurrence equations and their solution",
  "Substitution method",
  "Recursion-tree method",
  "Master method",
];

const todoItems2 = [
  "Arrays",
  "Stacks",
  "Queues",
  "Pointers",
  "Linked Lists (One-way)",
  "Linked Lists (Two-way)",
  "Linked Lists (Circular Two-way)",
  "Hashing",
  "Trees (BST)",
  "Trees (B Tree)",
  "Balanced Trees (AVL)",
  "Balanced Trees (Red-Black Trees)",
  "Heaps",
  "Graphs",
];
const todoItems3 = [
  "Sorting in linear time",
  "Counting sort",
  "Radix sort",
  "Bucket sort",
];
const todoItems4 = [
  "The General method",
  "Binary search",
  "Finding maximum and minimum of a sequence of numbers",
  "2-way Merge sort",
  "Quick sort",
  "Selection sort",
  "Strassen’s matrix multiplication",
  "The General method",
  "Fractional Knapsack problem",
  "Prim’s Algorithm",
  "Kruskal Algorithm",
  "Huffman coding",
  "Optimal merge patterns",
];
const todoItems5 = [
  "The general method",
  "0/1 Knapsack",
  "Subset Sum problem",
  "Change making problem",
  "Optimal binary search tree",
  "Matrix-chain Multiplication",
  "Longest common Subsequence Problem",
  "Travelling Salesman Problem",
  "Comparison of Divide & Conquer and Dynamic Programming techniques",
];
const todoItems6 = [
  "The general method",
  "N-Queen’s problem",
  "Sum-of-subsets",
  "Hamiltonian cycles",
  "Branch and Bound method",
  "0/1 Knapsack problem",
  "Travelling Salesperson problem",
];
const todoItems7 = [
  "Representation of Graphs",
  "Depth First Search",
  "Breadth First Search",
  "Topological Sort",
  "Dijkstra Algorithm",
  "Bellman Ford Algorithm",
  "All-Pair Shortest Paths: Floyd Warshall Algorithm",
  "Minimum Spanning Tree: Kruskal's Algorithm",
];
const todoItems8 = [
  "Basic Concept",
  "P and NP-classes",
  "proof of NP-hard",
  "NP-hard",
  "NP-completeness",
];
const todoItems9 = [
  "Euclid Algorithm for GCD of 2 numbers",
  "modulo arithmetic",
  "Chinese remainder theorem",
  "string manipulation/matching algorithms",
  "Rabin Karp algorithm",
  "KMP (Knuth-Morris-Pratt) algorithm",
  "Boyer-Moore algorithm",
  "Convex Hull",
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
      case 7:
        return todoItems7;
      case 8:
        return todoItems8;
      case 9:
        return todoItems9;
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
      header: "Algorithm and Program Performance",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 1,
    },
    {
      id: 2,
      header: "Review of Data Structures",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 2,
    },
    {
      id: 3,
      header: "Sorting Algorithm",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 3,
    },
    {
      id: 4,
      header: "Divide and Conquer & Greedy Algorithms",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 4,
    },
    {
      id: 5,
      header: "Dynamic Programming",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 5,
    },
    {
      id: 6,
      header: "BackTracking& Branch and Bound",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 6,
    },
    {
      id: 7,
      header: "Graph Algorithms",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 7,
    },
    {
      id: 8,
      header: "Computational Complexity",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 8,
    },
    {
      id: 9,
      header: "Miscellaneous Topics",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 9,
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

        <h1 className="H1Accord">DESIGN AND ANALYSIS OF ALGORITHMS</h1>
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
