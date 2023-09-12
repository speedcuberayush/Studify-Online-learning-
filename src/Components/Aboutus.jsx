import React from "react";
import "./styles/Aboutus.css";
import Contact from "./Contact";

function Benifits() {
  return (
    <>
      <div className="BenifitsPart">
        <div className="Benifitscontainer">
          <div className="Benifitscard">
            <h2 className="BenifitsH2">1</h2>
          </div>
          <div className="Benifitscard">
            <h2 className="BenifitsH2">2</h2>
          </div>
          <div className="Benifitscard">
            <h2 className="BenifitsH2">3</h2>
          </div>
          <div className="Benifitscard">
            <h2 className="BenifitsH2">4</h2>
          </div>
          <div className="Benifitscard">
            <h2 className="BenifitsH2">5</h2>
          </div>
        </div>
      </div>
    </>
  );
}
function Aboutus() {
  return (
    <div>
      <div id="parallax-world-of-ugg">
        <section>
          <div className="title">
            <h1>STUDIFY</h1>
            <h3>ABOUT US</h3>
          </div>
        </section>
        <section>
          <div
            className="parallax-one"
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <h2>SOUTHERN CALIFORNIA</h2>
            <p style={{ color: "#fff" }}>
              Studify aims to address the fragmented nature of learning, content
              creation, and career development platforms by offering an
              integrated solution that combines courses, articles, AI content
              generation, programming resources, and career opportunities. The
              platform seeks to simplify and enhance the learning and growth
              experience for users by providing a single platform that caters to
              multiple educational and professional needs.
            </p> */}
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
            <p>
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
            </p>
          </div>
        </section>
        <section>
          <div
            className="parallax-two"
            style={{
              height: "200vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <h2 style={{color: "#2a2a2a"}}>THE PROCESS</h2> */}
          </div>
        </section>
        <h2 className="TimelineHeading">FEATURES & BENIFITS</h2>
        <Benifits />
        <Features />

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
            {/* <p>
              <span className="first-character ny">B</span>reaking into the New
              York fashion world is no easy task. But by the early 2000's, UGG
              Australia began to take it by storm. The evolution of UGG from a
              brand that made sheepskin boots, slippers, clogs and sandals for
              an active, outdoor lifestyle to a brand that was now being touted
              as a symbol of a stylish, casual and luxurious lifestyle was
              swift. Much of this was due to a brand repositioning effort that
              transformed UGG into a high-end luxury footwear maker. As a
              fashion brand, UGG advertisements now graced the pages of Vogue
              Magazine as well as other fashion books. In the mid 2000's, the
              desire for premium casual fashion was popping up all over the
              world and UGG was now perfectly aligned with this movement.
            </p>
            <p className="line-break margin-top-10" />
            <p className="margin-top-10">
              Fueled by celebrities from coast to coast wearing UGG boots and
              slippers on their downtime, an entirely new era of fashion was
              carved out. As a result, the desire and love for UGG increased as
              people wanted to go deeper into this relaxed UGG experience. UGG
              began offering numerous color and style variations on their
              sheepskin boots and slippers. Cold weather boots for women and men
              and leather casuals were added with great success. What started as
              a niche item, UGG sheepskin boots were now a must-have staple in
              everyone's wardrobe. More UGG collections followed, showcasing
              everything from knit boots to sneakers to wedges, all the while
              maintaining that luxurious feel UGG is known for all over the
              world. UGG products were now seen on runways and in fashion shoots
              from coast to coast. Before long, the love spread even further.
            </p> */}
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
            <h2>OUR PARTNERS</h2>
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
            <p>
              <span className="first-character atw">W</span>hen the New York
              fashion community notices your brand, the world soon follows. The
              widespread love for UGG extended to Europe in the mid-2000's along
              with the stylish casual movement and demand for premium casual
              fashion. UGG boots and shoes were now seen walking the streets of
              London, Paris and Amsterdam with regularity. To meet the rising
              demand from new fans, UGG opened flagship stores in the UK and an
              additional location in Moscow. As the love spread farther East,
              concept stores were opened in Beijing, Shanghai and Tokyo. UGG
              Australia is now an international brand that is loved by all. This
              love is a result of a magical combination of the amazing
              functional benefits of sheepskin and the heightened emotional
              feeling you get when you slip them on your feet. In short, you
              just feel better all over when you wear UGG boots, slippers, and
              shoes.
            </p>
            <p className="line-break margin-top-10" />
            <p className="margin-top-10">
              In 2011, UGG will go back to its roots and focus on bringing the
              active men that brought the brand to life back with new styles
              allowing them to love the brand again as well. Partnering with
              Super Bowl champion and NFL MVP Tom Brady, UGG will invite even
              more men to feel the love the rest of the world knows so well. UGG
              will also step into the world of high fashion with UGG Collection.
              The UGG Collection fuses the timeless craft of Italian shoemaking
              with the reliable magic of sheepskin, bringing the luxurious feel
              of UGG to high end fashion. As the love for UGG continues to
              spread across the world, we have continued to offer new and
              unexpected ways to experience the brand. The UGG journey continues
              on and the love for UGG continues to spread.
            </p>
          </div>
        </section>
        <section>
          <div
            className="parallax-one"
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Contact />
            {/* <h2>Contact us</h2>
            <div className="contactwalaforms">
              <div className="contactwalapart1">LOCATION</div>
              <div className="contactwalapart2">CONTACT DETAILS</div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Aboutus;

function Features() {
  return (
    <>
      {" "}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="dabbamedabba">
        <h2 className="TimelineHeading">FUTURE WORKS</h2>
        <div className="timeline">
          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div className="timeline__event__icon ">
              <i className="lni-cake" />
            </div>
            <div className="timeline__event__date">Mobile App</div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">----</div>
              <div className="timeline__event__description">
                <p>
                  Create a mobile app version of Studify to provide users with
                  on-the-go access to learning resources and challenges
                </p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div className="timeline__event__icon">
              <i className="lni-burger" />
            </div>
            <div className="timeline__event__date">
              Project <br />
              Showcases
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">----</div>
              <div className="timeline__event__description">
                <p>
                  Enable users to showcase their coding projects, AI models, or
                  completed courses in a dedicated portfolio section to
                  highlight their skills and accomplishments.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div className="timeline__event__icon">
              <i className="lni-slim" />
            </div>
            <div className="timeline__event__date">
              AI <br />
              INTEGRATION
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">----</div>
              <div className="timeline__event__description">
                <p>
                  Infuse AI seamlessly into every facet of the learning path.
                  This ambitious endeavor will harness the power of AI to
                  provide users with advanced, personalized learning experiences
                </p>
              </div>
            </div>
          </div>
          <div className="timeline__event animated fadeInUp timeline__event--type1">
            <div className="timeline__event__icon">
              <i className="lni-cake" />
            </div>
            <div className="timeline__event__date">
              Project <br />
              Showcases
            </div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">----</div>
              <div className="timeline__event__description">
                <p>
                  Enable users to showcase their coding projects, AI models, or
                  completed courses in a dedicated portfolio section to
                  highlight their skills and accomplishments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
