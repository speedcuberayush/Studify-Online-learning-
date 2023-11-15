import React from "react";
import "./Intern.scss";

function Intern() {
  return (
    <div className="InternOOOP">
      <header className="InternHeader">
        <h1 style={{ fontFamily: '"Vina Sans", "sans-serif"' }}>
          Internship Opportunities
        </h1>
      </header>
      <div className="InternBAND">
        <div className="item-1">
          <a
            href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
            className="InternCardss"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)",
              }}
            />
            <article className="Internarticle">
              <h1 className="Internh1">
                International Artist Feature: Malaysia
              </h1>
              <span className="ArticleSpan">Mary Winkler</span>
            </article>
          </a>
        </div>
        <div className="item-2">
          <a
            href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045"
            className="InternCardss"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png)",
              }}
            />
            <article className="Internarticle">
              <h1 className="Internh1">
                How to Conduct Remote Usability Testing
              </h1>
              <span className="ArticleSpan">Harry Brignull</span>
            </article>
          </a>
        </div>
        <div className="item-3">
          <a
            href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
            className="InternCardss"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg)",
              }}
            />
            <article className="Internarticle">
              <h1 className="Internh1">Created by You, July Edition</h1>
              <p className="InternPP">
                Welcome to our monthly feature of fantastic tutorial results
                created by you, the Envato Tuts+ community!{" "}
              </p>
              <span className="ArticleSpan">Melody Nieves</span>
            </article>
          </a>
        </div>
        <div className="item-4">
          <a
            href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826"
            className="InternCardss"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png)",
              }}
            />
            <article className="Internarticle">
              <h1 className="Internh1">
                How to Code a Scrolling “Alien Lander” Website
              </h1>
              <p className="InternPP">
                We’ll be putting things together so that as you scroll down from
                the top of the page you’ll see an “Alien Lander” making its way
                to touch down.
              </p>
              <span className="ArticleSpan">Kezz Bracey</span>
            </article>
          </a>
        </div>
        <div className="item-5">
          <a
            href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139"
            className="InternCardss"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg)",
              }}
            />
            <article className="Internarticle">
              <h1 className="Internh1">
                How to Create a “Stranger Things” Text Effect in Adobe Photoshop
              </h1>
              <span className="ArticleSpan">Rose</span>
            </article>
          </a>
        </div>
        <div className="item-6">
          <a
            href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
            className="InternCardss"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg)",
              }}
            />
            <article className="Internarticle">
              <h1 className="Internh1">
                5 Inspirational Business Portraits and How to Make Your Own
              </h1>
              <span className="ArticleSpan">Marie Gardiner</span>
            </article>
          </a>
        </div>
        <div className="item-7">
          <a
            href="https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281"
            className="InternCardss"
          >
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
              }}
            />
            <article className="Internarticle">
              <h1 className="Internh1">
                Notes From Behind the Firewall: The State of Web Design in China
              </h1>
              <span className="ArticleSpan">Kendra Schaefer</span>
            </article>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intern;
