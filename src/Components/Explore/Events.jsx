import React from "react";
import "./Events.scss";
function Events() {
  return (
    <div className="ExploreEvents">
      <main className="responsive-wrapper">
        <div className="page-title">
          <h1 style={{ marginTop: "20px" }}>
            Latest Events and Hackathons ...
          </h1>
        </div>
        <div className="magazine-layout">
          <div className="magazine-column">
            <article className="Eventarticle">
              <h2 className="Eventarticle-title article-title--large">
                <a href="#" className="Eventarticle-link">
                  LeetCode Weekly Coding Challenge
                  {/* {" "}
                  <mark className="mark mark--primary">Alcoholic Liver</mark>{" "}
                  Damage Are Not in the Liver */}
                </a>
              </h2>
              <div className="Eventarticle-excerpt">
                <p>
                  Unleash Your Code Power: Conquer Challenges, Elevate Skills,
                  Every Week!
                </p>
                <p>
                  Every Sunday 08:00AM <br /> GMT + 5.30
                </p>
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    // src="https://assets.codepen.io/285131/author-3.png"
                    src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>P-LEETCODE</dt>
                    <dd>ADMIN</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="Eventarticle">
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  {" "}
                  LeetCode Biweekly Challenge
                </a>
              </h2>
              <div className="Eventarticle-creditation">
                <p>
                  Code Beyond Boundaries: Master Challenges, Transform Every
                  Fortnight!
                </p>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="Eventarticle">
              <figure className="Eventarticle-img">
                <img
                  className="EventIMG"
                  src="https://www.seekajob.in/wp-content/uploads/2023/06/Flipkart-GRiD-5.0.jpg"
                />
              </figure>
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  Flipkart GRiD 5.0 - Software Development Track
                </a>
              </h2>
              <div className="Eventarticle-excerpt">
                <p>
                  Flipkart GRiD 5.0 - Software Development Track, the flagship
                  engineering campus challenge, invites B.Tech/B.E./M.Tech/M.S.
                  students from Indian engineering colleges to showcase their
                  technical prowess in solving real-world E-Commerce challenges.
                  With three elimination levels, including an E-Commerce & Tech
                  Quiz, Submission Round, and the National Finale, participants
                  have the chance to prove their technical, analytical, and
                  ideation skills. The competition offers attractive prizes,
                  internship opportunities with a stipend of INR 1,00,000 per
                  month, and a shot at securing Tech Internships & Full-Time
                  Roles with a compensation of INR 32 LPA. Winners receive EGVs
                  worth INR 1,50,000, and all qualifying teams gain exposure to
                  Flipkart's hiring process for lucrative career opportunities
                  in the realm of software development.
                </p>
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    // src="https://assets.codepen.io/285131/author-2.png"
                    src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-800x800.png"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>UNStop</dt>
                    <dd>Online</dd>
                  </dl>
                </div>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="Eventarticle">
              <figure
                className="Eventarticle-img"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="EventIMG"
                  src="data:image/jpeg;base64,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"
                />
              </figure>
              <h2 className="Eventarticle-title article-title--small">
                <a href="#" className="Eventarticle-link">
                  powered by TCS
                  {/* {" "}
                  <mark className="mark mark--secondary">Happier</mark>, Ask
                  Yourself These Two Questions Every Night */}
                </a>
              </h2>
              <div className="Eventarticle-creditation">
                <p>
                  TCS Codevita, a premier 24-hour online coding competition for
                  Indian engineering students, offers a unique challenge with
                  three rounds, allowing participants to engage once in their
                  lifetime, and stands out for its global reach and high
                  difficulty level
                </p>
              </div>
            </article>
            <article className="Eventarticle">
              <figure
                className="Eventarticle-img"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="EventIMG"
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6527f67898e3f_logo_listing.png"
                />
              </figure>
              <h2 className="Eventarticle-title article-title--small">
                <a href="#" className="Eventarticle-link">
                  L'Oréal Sustainability Challenge 2023
                </a>
              </h2>
              <div className="Eventarticle-creditation">
                <p>By Unstop</p>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="Eventarticle">
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  World cup Wizard <br />
                  Hack-a-thon
                </a>
              </h2>
              <div className="Eventarticle-excerpt">
                <p>
                  Unleash innovation in the world of cricket with our hackathon,
                  a movement set to redefine the upcoming World Cup experience
                  through cutting-edge technology and data-driven solutions.
                  Join us as trailblazers to create an unforgettable tournament
                  that captivates fans worldwide and transforms the future of
                  cricket.
                </p>
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    // src="https://assets.codepen.io/285131/author-2.png"
                    src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>Powered by</dt>
                    <dd>GEEKS FOR GEEKS</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="Eventarticle">
              <small className="Eventarticle-category">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={28}
                  height={22}
                  viewBox="0 0 28 22"
                >
                  <defs>
                    <clipPath id="clip-headphones">
                      <rect width={28} height={22} />
                    </clipPath>
                  </defs>
                  <g id="headphones" clipPath="url(#clip-headphones)">
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      transform="translate(-3680 -609)"
                    >
                      <path
                        id="Subtraction_1"
                        data-name="Subtraction 1"
                        d="M5,12H5A5.274,5.274,0,0,1,0,6.5,5.274,5.274,0,0,1,5,1V12Z"
                        transform="translate(3680 619)"
                      />
                      <rect
                        id="Rectangle_18"
                        data-name="Rectangle 18"
                        width={2}
                        height={11}
                        transform="translate(3686 620)"
                      />
                      <path
                        id="Subtraction_5"
                        data-name="Subtraction 5"
                        d="M1.243,12H.045C.015,11.67,0,11.334,0,11A11,11,0,0,1,18.778,3.222,10.925,10.925,0,0,1,22,11c0,.331-.015.667-.045,1h-1.2a14.108,14.108,0,0,0-2.685-6.241A8.982,8.982,0,0,0,11,2,8.982,8.982,0,0,0,3.929,5.759,14.109,14.109,0,0,0,1.243,12Z"
                        transform="translate(3683 609)"
                      />
                      <path
                        id="Subtraction_6"
                        data-name="Subtraction 6"
                        d="M5,0H5A5.274,5.274,0,0,0,0,5.5,5.274,5.274,0,0,0,5,11V0Z"
                        transform="translate(3708 631) rotate(180)"
                      />
                      <rect
                        id="Rectangle_23"
                        data-name="Rectangle 23"
                        width={2}
                        height={11}
                        transform="translate(3700 620)"
                      />
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M.156-.031,2.125-1.687,2,2H0Z"
                        transform="translate(3683 619)"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M1.969-.031,0-1.687.125,2h2Z"
                        transform="translate(3702.875 619)"
                      />
                    </g>
                  </g>
                </svg>
                <span>Expert Session / Webinar</span>
              </small>
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  {/* Things to Do After 6 P.M Will Enrich{" "} */}
                  Ethical Use of AI{" "}
                  {/* <mark className="mark mark--tertiary">Your Life</mark> */}
                </a>
              </h2>
              <div className="Eventarticle-podcast-player">
                <button className="podcast-play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={192}
                    height={192}
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z" />
                  </svg>
                </button>
                <div className="podcast-progression"></div>
                <span className="podcast-time">23:45</span>
              </div>
              <div className="Eventarticle-podcast-info">
                Dive into the world of ethical AI with our upcoming webinar,
                where experts will unravel the intricacies of responsible AI
                development and usage. Join us for an insightful discussion,
                exploring the crucial intersection of technology and ethics to
                ensure a sustainable and responsible future for artificial
                intelligence.
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    src="data:image/jpeg;base64,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"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>Sandeep Jain</dt>
                    <dd>GEEKS FOR GEEKS</dd>
                  </dl>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* part-2 */}
        <div className="magazine-layout">
          <div className="magazine-column">
            <article className="Eventarticle">
              <h2 className="Eventarticle-title article-title--large">
                <a href="#" className="Eventarticle-link">
                  GFG Weekly Coding Contest
                  {/* {" "}
                  <mark className="mark mark--primary">Alcoholic Liver</mark>{" "}
                  Damage Are Not in the Liver */}
                </a>
              </h2>
              <div className="Eventarticle-excerpt">
                <p>
                  Unlock the Code, Ignite the Mind: GFG Weekly Coding Contest,
                  Where Challenges Fuel Brilliance Every Week!
                </p>
                <p>Every Sunday 07:00PM</p>
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    // src="https://assets.codepen.io/285131/author-3.png"
                    src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>powered by</dt>
                    <dd>Geeks for Geeks</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="Eventarticle">
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  {" "}
                  Code Sprint 2.0 Coding Competition
                </a>
              </h2>
              <div className="Eventarticle-creditation">
                <p>
                  Objective: Code Sprint 2.0 will test your competitive coding
                  skills. You'll tackle programming challenges, algorithm
                  puzzles, and real-world problems within a set time frame.
                </p>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="Eventarticle">
              <figure
                className="Eventarticle-img"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="EventIMG"
                  src="https://lh3.googleusercontent.com/mim01MAFtuRQyKEWRwjidGch4E5IzjjJcfhm3DCx9lUnrOJS3pJcJYXkuC7OJtVT9pKXztqd45BJ_dtcjSey-mcXwViTrFRy9SGm15zaYtYovAMtZQ4"
                />
              </figure>
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  Google Summer of Code (GSoC):2024
                </a>
              </h2>
              <div className="Eventarticle-excerpt">
                <p>
                  Google Summer of Code (GSoC) is an annual program that
                  empowers student developers worldwide to contribute to
                  open-source projects. Selected participants receive
                  mentorship, stipends, and a chance to enhance their coding
                  skills during the summer.
                </p>
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    // src="https://assets.codepen.io/285131/author-2.png"
                    src="https://thumbs.dreamstime.com/b/new-google-logo-vector-illustration-white-background-editorial-149046930.jpg"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>by Google</dt>
                    <dd>Online</dd>
                  </dl>
                </div>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="Eventarticle">
              <figure className="Eventarticle-img">
                <img
                  className="EventIMG"
                  src="https://ltts.techgium.com/Asset/img/logo.png"
                />
              </figure>
              <h2 className="Eventarticle-title article-title--small">
                <a href="#" className="Eventarticle-link">
                  powered by L & T
                  {/* {" "}
                  <mark className="mark mark--secondary">Happier</mark>, Ask
                  Yourself These Two Questions Every Night */}
                </a>
              </h2>
              <div className="Eventarticle-creditation">
                <p>
                  An open innovation competition empowering students to tackle
                  major engineering challenges, providing exposure to real
                  industry problems, fostering practical solutions, and building
                  a talent pool with industry expertise.
                </p>
              </div>
            </article>
            <article className="Eventarticle">
              <figure className="Eventarticle-img">
                <img
                  className="EventIMG"
                  src="https://gate2024.iisc.ac.in/wp-content/uploads/2023/07/gate-logo.jpg"
                />
              </figure>
              <h2 className="Eventarticle-title article-title--small">
                <a href="#" className="Eventarticle-link">
                  GATE 2024
                </a>
              </h2>
              <div className="Eventarticle-creditation">
                <p>IISc Bangalore</p>
              </div>
            </article>
          </div>
          <div className="magazine-column">
            <article className="Eventarticle">
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  Job-a-Thon
                </a>
              </h2>
              <div className="Eventarticle-excerpt">
                <p>
                  Monthly recruitment contests suitable for both newcomers
                  (Freshers) and seasoned professionals. Participate in
                  JOB-A-THON, a gateway to diverse career opportunities offered
                  by numerous companies.
                </p>
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    // src="https://assets.codepen.io/285131/author-2.png"
                    src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>Powered by</dt>
                    <dd>GEEKS FOR GEEKS</dd>
                  </dl>
                </div>
              </div>
            </article>
            <article className="Eventarticle">
              <small className="Eventarticle-category">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={28}
                  height={22}
                  viewBox="0 0 28 22"
                >
                  <defs>
                    <clipPath id="clip-headphones">
                      <rect width={28} height={22} />
                    </clipPath>
                  </defs>
                  <g id="headphones" clipPath="url(#clip-headphones)">
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      transform="translate(-3680 -609)"
                    >
                      <path
                        id="Subtraction_1"
                        data-name="Subtraction 1"
                        d="M5,12H5A5.274,5.274,0,0,1,0,6.5,5.274,5.274,0,0,1,5,1V12Z"
                        transform="translate(3680 619)"
                      />
                      <rect
                        id="Rectangle_18"
                        data-name="Rectangle 18"
                        width={2}
                        height={11}
                        transform="translate(3686 620)"
                      />
                      <path
                        id="Subtraction_5"
                        data-name="Subtraction 5"
                        d="M1.243,12H.045C.015,11.67,0,11.334,0,11A11,11,0,0,1,18.778,3.222,10.925,10.925,0,0,1,22,11c0,.331-.015.667-.045,1h-1.2a14.108,14.108,0,0,0-2.685-6.241A8.982,8.982,0,0,0,11,2,8.982,8.982,0,0,0,3.929,5.759,14.109,14.109,0,0,0,1.243,12Z"
                        transform="translate(3683 609)"
                      />
                      <path
                        id="Subtraction_6"
                        data-name="Subtraction 6"
                        d="M5,0H5A5.274,5.274,0,0,0,0,5.5,5.274,5.274,0,0,0,5,11V0Z"
                        transform="translate(3708 631) rotate(180)"
                      />
                      <rect
                        id="Rectangle_23"
                        data-name="Rectangle 23"
                        width={2}
                        height={11}
                        transform="translate(3700 620)"
                      />
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M.156-.031,2.125-1.687,2,2H0Z"
                        transform="translate(3683 619)"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M1.969-.031,0-1.687.125,2h2Z"
                        transform="translate(3702.875 619)"
                      />
                    </g>
                  </g>
                </svg>
                <span>Expert Session / Webinar</span>
              </small>
              <h2 className="Eventarticle-title article-title--medium">
                <a href="#" className="Eventarticle-link">
                  {/* Things to Do After 6 P.M Will Enrich{" "} */}
                  Azure events and webinars
                  {/* <mark className="mark mark--tertiary">Your Life</mark> */}
                </a>
              </h2>
              <div className="Eventarticle-podcast-player">
                <button className="podcast-play-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={192}
                    height={192}
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width={256} height={256} fill="none" />
                    <path d="M232.3125,114.34375,88.34375,26.35937A15.99781,15.99781,0,0,0,64,40.00781V215.99219a16.00521,16.00521,0,0,0,24.34375,13.64843L232.3125,141.65625a16.00727,16.00727,0,0,0,0-27.3125Z" />
                  </svg>
                </button>
                <div className="podcast-progression"></div>
                <span className="podcast-time">23:45</span>
              </div>
              <div className="Eventarticle-podcast-info">
                Learn new skills, discover new technologies, and connect with
                your community—attend digitally or in person.
              </div>
              <div className="Eventarticle-author">
                <div className="Eventarticle-author-img">
                  <img
                    className="EventIMG"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fUYZToZjZ6b4tBJ9HsMT2DuHZqwvV0ISEw&usqp=CAU"
                  />
                </div>
                <div className="Eventarticle-author-info">
                  <dl>
                    <dt>powered by</dt>
                    <dd>MICROSOFT</dd>
                  </dl>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Events;
