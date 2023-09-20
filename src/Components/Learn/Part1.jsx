import "./Part1.scss";
import React, { useState } from "react";

function Part1() {
  const [activePart1Card, setActivePart1Card] = useState("TestiContent1");

  const handlePart1CardMouseOver = (Part1CardId) => {
    setActivePart1Card(Part1CardId);
  };

  return (
    <div className="Part1Testimonial">
      <section className="Part1Testi">
        <h1 className="TestiHeader1">testimonials</h1>
        <div className="Part1Cards">
          <div
            className={`Part1Card ${
              activePart1Card === "TestiContent1" ? "active" : ""
            }`}
            data-id="TestiContent1"
            onMouseOver={() => handlePart1CardMouseOver("TestiContent1")}
          >
            <img
              className="Tesitimg"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <div>
              <h3 className="TestiHeader3">milton austin</h3>
              <p className="TestiPara">sales manager, slack</p>
            </div>
            <div className="gradient" />
            {/* ... (Rest of the Part1Card TestiContent) */}
          </div>
          <div
            className={`Part1Card ${
              activePart1Card === "TestiContent2" ? "active" : ""
            }`}
            data-id="TestiContent2"
            onMouseOver={() => handlePart1CardMouseOver("TestiContent2")}
          >
            <img
              className="Tesitimg"
              src="https://randomuser.me/api/portraits/men/78.jpg"
              alt=""
            />
            <div>
              <h3 className="TestiHeader3">milton austin</h3>
              <p className="TestiPara">sales manager, slack</p>
            </div>
            <div className="gradient" />
            {/* ... (Rest of the Part1Card TestiContent) */}
          </div>
          <div
            className={`Part1Card ${
              activePart1Card === "TestiContent3" ? "active" : ""
            }`}
            data-id="TestiContent3"
            onMouseOver={() => handlePart1CardMouseOver("TestiContent3")}
          >
            {/* ... (Rest of the Part1Card TestiContent) */}
            <img
              className="Tesitimg"
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt=""
            />
            <div>
              <h3 className="TestiHeader3">milton austin</h3>
              <p className="TestiPara">sales manager, slack</p>
            </div>
            <div className="gradient" />
          </div>
        </div>
        <div className="TestiContent">
          <div
            className={`TestiContentBox ${
              activePart1Card === "TestiContent1" ? "active" : ""
            }`}
            id="TestiContent1"
          >
            {/* ... (TestiContent for TestiContent1) */}
            <div className="Part1Txet">
              <h2 className="TestiHeader2">Great collaboration</h2>
              <span className="TestiSppan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="TestiPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                iure possimus harum quisquam praesentium ipsum accusantium,
                facilis omnis, blanditiis quas soluta nihil incidunt laboriosam
                dicta maiores, modi quaerat consectetur officia accusamus libero
                aut molestiae fuga eveniet quidem? Modi obcaecati, beatae
                officia odio nihil minus voluptatem quidem consequatur ad rem
                blanditiis? Natus iure possimus harum quisquam praesentium ipsum
                accusantium, facilis omnis.
              </p>
              <p className="TestiPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eius odit at aliquid, reprehenderit repellendus quo
                vero nam cumque incidunt iusto optio molestias facilis eum
                corrupti dolorum rem nemo. Nulla id incidunt ullam voluptate
                recusandae.
              </p>
            </div>
          </div>
          <div
            className={`TestiContentBox ${
              activePart1Card === "TestiContent2" ? "active" : ""
            }`}
            id="TestiContent2"
          >
            {/* ... (TestiContent for TestiContent2) */}
            <div className="Part1Txet">
              <h2 className="TestiHeader2">It was a great experience!</h2>
              <span className="TestiSppan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="TestiPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                iure possimus harum quisquam praesentium ipsum accusantium,
                facilis omnis, blanditiis quas soluta nihil incidunt laboriosam
                dicta maiores, modi quaerat consectetur officia accusamus libero
                aut molestiae fuga eveniet quidem? Modi obcaecati, beatae
                officia odio nihil minus voluptatem quidem consequatur ad rem
                blanditiis? Natus iure possimus harum quisquam praesentium ipsum
                accusantium, facilis omnis.
              </p>
              <p className="TestiPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eius odit at aliquid, reprehenderit repellendus quo
                vero nam cumque incidunt iusto optio molestias facilis eum
                corrupti dolorum rem nemo. Nulla id incidunt ullam voluptate
                recusandae.
              </p>
            </div>
          </div>
          <div
            className={`TestiContentBox ${
              activePart1Card === "TestiContent3" ? "active" : ""
            }`}
            id="TestiContent3"
          >
            {/* ... (TestiContent for TestiContent3) */}
            <div className="Part1Txet">
              <h2 className="TestiHeader2">Quickly and Efficiently</h2>
              <span className="TestiSppan">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="TestiPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                iure possimus harum quisquam praesentium ipsum accusantium,
                facilis omnis, blanditiis quas soluta nihil incidunt laboriosam
                dicta maiores, modi quaerat consectetur officia accusamus libero
                aut molestiae fuga eveniet quidem? Modi obcaecati, beatae
                officia odio nihil minus voluptatem quidem consequatur ad rem
                blanditiis? Natus iure possimus harum quisquam praesentium ipsum
                accusantium, facilis omnis.
              </p>
              <p className="TestiPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eius odit at aliquid, reprehenderit repellendus quo
                vero nam cumque incidunt iusto optio molestias facilis eum
                corrupti dolorum rem nemo. Nulla id incidunt ullam voluptate
                recusandae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Part1;
