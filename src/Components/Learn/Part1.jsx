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
              src="https://apidyn.royalsociety.org/images/fellows/P37009-Elon-Musk.jpg"
              alt=""
            />
            <div>
              <h3 className="TestiHeader3">ELON MUSK</h3>
              <p className="TestiPara">CEO, SpaceX and Tesla</p>
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/HC_verma.png/640px-HC_verma.png"
              alt=""
            />
            <div>
              <h3 className="TestiHeader3">HC Verma</h3>
              <p className="TestiPara">Indian physicist and writer</p>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7XEjwYa9WAkePZbthPOKp6-D4ZjRzopAqOCfamH3hU1bAG53RBjkKdgimcj0uKyt7pg&usqp=CAU"
              alt=""
            />
            <div>
              <h3 className="TestiHeader3">Narendra Modi</h3>
              <p className="TestiPara">Prime Minister of India</p>
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
              <h2 className="TestiHeader2">Great Innovation</h2>
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
                STUDIFY is not just a platform; it's a gateway to limitless
                knowledge. By harnessing the power of AI, it has transformed the
                learning landscape, providing personalized, efficient, and
                engaging educational experiences. With STUDIFY, anyone can chart
                their educational journey, equipping themselves for the
                challenges of the future. This platform is a testament to the
                boundless possibilities of technology in education, making
                quality learning accessible to all.
              </p>
              <p className="TestiPara">
                STUDIFY's commitment to innovation aligns perfectly with our
                ever-advancing world. It's a testament to human progress and a
                beacon of hope for a brighter future. By embracing STUDIFY, we
                are empowering generations to come, fostering creativity, and
                driving change on a global scale.
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
                STUDIFY has revolutionized the way we approach education. It
                seamlessly blends cutting-edge AI technology with a vast
                repository of knowledge, providing students with an unparalleled
                learning experience. As someone deeply passionate about physics
                education, I find STUDIFY's dedication to quality and
                accessibility truly commendable.
              </p>
              <p className="TestiPara">
                STUDIFY's commitment to helping students grasp complex concepts
                in physics and various other subjects is remarkable. It empowers
                learners to explore, understand, and excel in their academic
                pursuits. This platform has the potential to nurture the next
                generation of scientists and innovators, making quality
                education accessible to all, regardless of their background.
                STUDIFY is indeed a game-changer in the world of online
                learning.
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
              <h2 className="TestiHeader2">
                {" "}
                A transformative educational initiative that aligns perfectly
                with his vision for digital India.
              </h2>
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
                STUDIFY's innovative integration of AI technology and
                comprehensive educational resources has the potential to
                revolutionize education in India. It resonates with our 'Digital
                India' and 'Skill India' initiatives, making quality education
                accessible to every corner of the nation.
              </p>
              <p className="TestiPara">
                I believe that STUDIFY can play a pivotal role in transforming
                India's education landscape. Its adaptability and scalability
                make it a valuable asset in our mission to provide world-class
                education to all citizens. I envision STUDIFY being implemented
                across schools, colleges, and universities throughout the
                country, ensuring that every student has access to the best
                learning opportunities available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Part1;
