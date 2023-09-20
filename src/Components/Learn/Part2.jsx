import React from "react";
import "./Part2.css";

function AccordionContent({ id, contentText }) {
  return (
    <section className="Part2Accordion" id={id}>
      <h1 className="Part2Title">
        <a href={`#${id}`}>{id.replace(/-/g, " ")}</a>
      </h1>
      <div className="part2Content">
        <div className="Part2AccordionWrapper">
          {contentText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Part2() {
  const sections = [
    {
      id: "1. What is Studify?",
      content: [
        "Studify is an online learning platform that offers a diverse range of courses, resources, and tools to help users enhance their skills and knowledge in various fields. It provides access to free courses and premium content to support continuous learning.",
      ],
    },
    {
      id: "2. Are all the courses on Studify free?",
      content: [
        "Yes, Studify offers a wide selection of free courses across different categories. These courses are accessible to all users at no cost. Additionally, there may be premium courses available for a fee, offering advanced and specialized learning opportunities.",
      ],
    },
    {
      id: "3. What AI-based features does Studify offer?",
      content: [
        "Studify integrates AI technology to provide AI-generated content, including images, videos, text, code snippets, and audio. These AI tools enhance the learning experience and creativity for users.",
      ],
    },
    {
      id: "4. What categories of courses are available on Studify?",
      content: [
        "Studify categorizes its courses into various fields, including Programming, Design, Development, Data Science, and more. You can explore courses that align with your interests and career goals within these categories.",
      ],
    },
    {
      id: "Can I contact Studify support if I have questions or issues?",
      content: [
        "Absolutely! If you have any questions or encounter issues while using Studify, you can easily reach out to our support team. Visit the 'Contact Us' page on our website to find the necessary contact information and assistance.",
      ],
    },
  ];

  return (
    <div className="Part2Accordian">
      <main>
        <h1 className="Part2AccordianH1" style={{ textAlign: "center" }}>
          FAQs
        </h1>
        {sections.map((section) => (
          <AccordionContent
            key={section.id}
            id={section.id}
            contentText={section.content}
          />
        ))}
      </main>
    </div>
  );
}

export default Part2;
