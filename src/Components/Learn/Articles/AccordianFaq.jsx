import "./AccordianFaq.css";
import React, { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Check from "./Check";

const todoItems1 = [
  "Introduction to OS",
  "OS Structure",
  "Main functions of OS",
  "Characteristics of OS",
  "Types of OS",
  "System Calls",
  "Type of Syste  Calls",
  "System Programs",
];

const todoItems2 = [
  "Process Concept",
  "Process Control Block(PCB)",
  "Process Scheduling",
  "Threads",
  "CPU scheduling",
  "Scheduling Criteria",
  "Scheduling Algorithms",
  "Interprocess Communication",
  "Remote Procedure Calls",
  "Process Synchronization",
];
const todoItems3 = [
  "Deadlock Characterization",
  "Conditions for deadlock",
  "Deadlock Prevention",
  "Deadlock avoidance-safe state",
  "Resource Allocation graph",
  "Banker's Algorithm",
  "Deadlock Detection",
  "Recovery from deadlock",
];
const todoItems4 = [
  "Address binding",
  "logical versus physical address space",
  "dynamic loading",
  "contiguous memory allocation",
  "Fragmentation",
  "Paging",
  "Segmentation",
  "Segmentation with Paging",
  "Virtual Memory Concept",
  "Demand Paging",
  "Page Replacement Algorithms",
];
const todoItems5 = [
  "Disk Structure",
  "Disk formatting",
  "Disk Scheduling Algorithms",
  "RAID structure-RAID levels",
  "problems with RAID",
];
const todoItems6 = [
  "File Concepts",
  "Access Methods",
  "Directory Structure",
  "Allocation Methods",
  "Free Space Management",
];
const todoItems7 = [
  "Goals",
  "Principles and domain of protection",
  "Access matrix",
  "Implementation of access matrix",
  "Security problem",
  "Program threats",
  "System and network threats.",
];
const todoItems8 = [
  "Topology",
  "Connection Strategy",
  "Network Operating Sytem Types",
  "PEER-to-PEER",
  "Client and Server",
  "Distributed message passing",
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
      header: "Introduction to the Operating System",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 1,
    },
    {
      id: 2,
      header: "Process Management",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 2,
    },
    {
      id: 3,
      header: "Deadlocks",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 3,
    },
    {
      id: 4,
      header: "Memory Management",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 4,
    },
    {
      id: 5,
      header: "Device Management",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 5,
    },
    {
      id: 6,
      header: "File Management",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 6,
    },
    {
      id: 7,
      header: "System Protection and Security",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 7,
    },
    {
      id: 8,
      header: "Distributed and Network Operating Systems",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      todoListId: 8,
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
        <h1 className="H1Accord">OPERATING SYSTEMS</h1>
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
