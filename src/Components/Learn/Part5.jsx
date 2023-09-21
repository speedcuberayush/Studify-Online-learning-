import React, { useState } from "react";
import "./Part5.css";
import "font-awesome/css/font-awesome.min.css";
function Part5() {
  const [activeTab, setActiveTab] = useState(0);
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />;
  const tabHeaders = [
    { icon: "fa fa-code", text: "Code" },
    { icon: "fa fa-pencil-square", text: "About" },
    { icon: "fa fa-bar-chart", text: "Services" },
    { icon: "fa fa-envelope", text: "Contact" },
  ];

  const tabContentData = [
    {
      title: "Code",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...",
    },
    {
      title: "About",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...",
    },
    {
      title: "Services",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique... ",
    },
    {
      title: "Contact",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique...",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="Part5Tabs">
      <div className="tab-header">
        {tabHeaders.map((header, index) => (
          <div
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            <i className={header.icon}></i> {header.text}
          </div>
        ))}
      </div>
      <div
        className="tab-indicator"
        style={{ top: `calc(80px + ${activeTab * 50}px)` }}
      ></div>
      <div className="tab-content">
        {tabContentData.map((tab, index) => (
          <div key={index} className={activeTab === index ? "active" : ""}>
            <i className={tabHeaders[index].icon}></i>
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Part5;
