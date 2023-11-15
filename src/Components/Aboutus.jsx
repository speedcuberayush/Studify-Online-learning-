import React from "react";
import "./styles/Aboutus.css";
import Contact from "./Aboutus/Contactus";
import Part1 from "./Aboutus/AboutusSlider.jsx";
import FAQss from "./Aboutus/FAQss.jsx";
import FeaturesbB from "./Aboutus/FeaturesbB.jsx";

function Aboutus() {
  return (
    <div style={{ height: "calc(100vh - 100px)", overflowY: "scroll" }}>
      <div id="parallax-world-of-ugg">
        <section>
          <div className="title">
            <h1>STUDIFY</h1>
            <h3>-by speedcuberAyush</h3>
          </div>
        </section>
        <section>
          <div
            className="parallax-one"
            style={{
              height: "140vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative", // Add this style
            }}
          >
            <div
              style={{
                position: "absolute", // Add this style
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", // Adjust the opacity by changing the last value (0.5)
              }}
            >
              <p
                style={{
                  color: "#fff",
                  width: "60vw",
                  textAlign: "center",
                  fontFamily: "'Vina Sans', 'sans-serif'",
                  fontSize: "30px",
                  lineHeight: "42px",
                  fontWeight: "100",
                }}
              >
                Studify is more than an online learning platform; it's a
                transformative educational ecosystem meticulously crafted to
                redefine the way learners engage with knowledge. With a
                comprehensive range of features, from structured courses and
                articles to official documentation and thoughtfully curated
                roadmaps, Studify transcends traditional learning boundaries. It
                seamlessly integrates real-world opportunities such as
                internships and freelance projects, fostering holistic
                professional development. What sets Studify apart is its
                commitment to engagement through AI-generated content, ensuring
                learners actively participate in their education. With a vision
                to reshape the landscape of online learning, Studify aspires to
                make education more accessible, engaging, and impactful than
                ever before.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div
            className="block"
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Part1 />
            {/* <p>
              <span className="first-character sc">S</span>tudify aims to
              address the fragmented nature of learning, content creation, and
              career development platforms by offering an integrated solution
              that combines courses, articles, AI content generation,
              programming resources, and career opportunities. The platform
              seeks to simplify and enhance the learning and growth experience
              for users by providing a single platform that caters to multiple
              educational and professional needs.
            </p>
            <p className="line-break margin-top-10" />
            <p className="margin-top-10">
              At the forefront of innovation in the realm of education and
              professional growth stands Studify, an all-encompassing web
              application meticulously designed to reshape the way individuals
              learn, create, and advance their careers. With an unwavering
              commitment to tackling the challenges of fragmented learning
              experiences and disconnected career pathways, Studify emerges as a
              transformative platform that seamlessly integrates a multitude of
              features, all geared toward empowering users on their journey of
              knowledge acquisition and self-improvement.
            </p> */}
          </div>
        </section>
        <section>
          <div
            className="parallax-two"
            style={{
              height: "calc(100vh - 250px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <h2 style={{color: "#2a2a2a"}}>THE PROCESS</h2> */}
          </div>
        </section>

        <section>
          <div
            className="block"
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FeaturesbB />
          </div>
        </section>
        <section>
          <div
            className="parallax-three"
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "#3a3a3a" }}>OUR PARTNERS</h2>
          </div>
        </section>
        <section>
          <div
            className="block"
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        </section>
        <FAQss />
        <section>
          <div
            className="parallax-one"
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative", // Add this style
            }}
          >
            <div
              style={{
                position: "absolute", // Add this style
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity by changing the last value (0.5)
              }}
            ></div>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Aboutus;
