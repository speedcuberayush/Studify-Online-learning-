import React, { useEffect } from "react";
import "./Articles.scss";
import { Link } from "react-router-dom";
function Article() {
  useEffect(() => {
    // === Vars ===

    const elementsToObserve = document.querySelectorAll("section[id]"),
      visibleClass = "visible",
      nav = document.querySelector(".ArticleNav"),
      navPath = nav.querySelector("svg path"),
      navListItems = [...nav.querySelectorAll("li")],
      navItems = navListItems
        .map((listItem) => {
          const anchor = listItem.querySelector("a"),
            targetID = anchor && anchor.getAttribute("href").slice(1),
            target = document.getElementById(targetID);

          return { listItem, anchor, target };
        })
        .filter((item) => item.target);

    // === Functions ===

    function drawPath() {
      let path = [],
        pathIndent;

      navItems.forEach((item, i) => {
        const x = item.anchor.offsetLeft - 5,
          y = item.anchor.offsetTop,
          height = item.anchor.offsetHeight;

        if (i === 0) {
          path.push("M", x, y, "L", x, y + height);
          item.pathStart = 0;
        } else {
          if (pathIndent !== x) path.push("L", pathIndent, y);

          path.push("L", x, y);

          navPath.setAttribute("d", path.join(" "));
          item.pathStart = navPath.getTotalLength() || 0;
          path.push("L", x, y + height);
        }

        pathIndent = x;
        navPath.setAttribute("d", path.join(" "));
        item.pathEnd = navPath.getTotalLength();
      });
    }

    function syncPath() {
      const someElsAreVisible = () =>
          nav.querySelectorAll(`.${visibleClass}`).length > 0,
        thisElIsVisible = (el) => el.classList.contains(visibleClass),
        pathLength = navPath.getTotalLength();

      let pathStart = pathLength,
        pathEnd = 0,
        lastPathStart,
        lastPathEnd;

      navItems.forEach((item) => {
        if (thisElIsVisible(item.listItem)) {
          pathStart = Math.min(item.pathStart, pathStart);
          pathEnd = Math.max(item.pathEnd, pathEnd);
        }
      });

      if (someElsAreVisible() && pathStart < pathEnd) {
        if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
          const dashArray = `1 ${pathStart} ${
            pathEnd - pathStart
          } ${pathLength}`;

          navPath.style.setProperty("stroke-dashoffset", "1");
          navPath.style.setProperty("stroke-dasharray", dashArray);
          navPath.style.setProperty("opacity", 1);
        }
      } else {
        navPath.style.setProperty("opacity", 0);
      }

      lastPathStart = pathStart;
      lastPathEnd = pathEnd;
    }

    function markVisibleSection(observedEls) {
      observedEls.forEach((observedEl) => {
        const id = observedEl.target.getAttribute("id"),
          anchor = document.querySelector(`nav li a[href="#${id}"]`);

        if (!anchor) return false;

        const listItem = anchor.parentElement;

        if (observedEl.isIntersecting) {
          listItem.classList.add(visibleClass);
        } else {
          listItem.classList.remove(visibleClass);
        }
        syncPath();
      });
    }

    // === Draw path and observe ===

    drawPath();

    const observer = new IntersectionObserver(markVisibleSection);
    elementsToObserve.forEach((thisEl) => observer.observe(thisEl));
  }, []);

  return (
    <>
      <div className="ArticleContent">
        <nav className="ArticleNav">
          <ul>
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#first">First section</a>
              <ul>
                <li>
                  <a href="#second">Second section</a>
                  <ul>
                    <li>
                      <a href="#third">Third section</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#fourth">Fourth section</a>
              <ul>
                <li>
                  <a href="#fifth">Fifth section</a>
                </li>
                <li>
                  <a href="#sixth">Sixth section</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#seventh">Seventh section</a>
            </li>
            <li>
              <a href="#eighth">Eighth section</a>
            </li>
            <li>
              <Link
                className="goBackwala"
                to="/ChapterAIML"
                style={{ textDecoration: "none" }}
              >
                <button class="buttonARTICLE">Go Back</button>
              </Link>
            </li>
          </ul>

          <svg className="ArticleSVG" xmlns="http://www.w3.org/2000/svg">
            <path className="ArticlePATH" />
          </svg>
        </nav>

        <article className="ArticlePartwala" id="top">
          <div class="subheading">An intersectionObserver approach to</div>
          <h1 className="ArticleH1">Hakim's Progress Nav Concept</h1>

          <section className="ArticleSection" id="intro">
            <h2 className="ArticleH2">Intro</h2>
            <p>
              Hakim el Hattab published a
              <a href="https://codepen.io/hakimel/pen/BpKNPg">
                Progress Nav concept
              </a>
              on Codepen back in 2017. As pointed out by Chris in
              <a href="https://css-tricks.com/table-of-contents-with-intersectionobserver/">
                a recent blog post
              </a>
              over at CSS Tricks, we now have the Intersection Observer API
              which saves us a good amount of hassle. Here's my attempt at an
              <code>intersectionObserver</code> version of Hakim's amazing nav
              concept.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              ipsam nesciunt delectus. Modi dolorum ullam sunt sit suscipit
              placeat harum, saepe fugiat a velit eius provident repellendus
              odit. Mollitia quia repellat asperiores similique at quibusdam
              debitis earum illum, provident quae blanditiis aspernatur totam
              adipisci distinctio illo cupiditate, nihil tempore corporis
              tempora quod voluptas a deleniti incidunt officiis. Ratione fugiat
              aliquid iure nesciunt illo unde dolor perspiciatis odit porro!
              Enim, saepe? Ipsum neque possimus quos incidunt! Ea minima magni,
              suscipit iure cupiditate commodi esse necessitatibus rerum qui eos
              beatae ex provident distinctio voluptates veniam ipsa non? Eveniet
              placeat dignissimos numquam saepe!
            </p>
          </section>

          <section className="ArticleSection" id="first">
            <h2 className="ArticleH2">First section</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nisi nisl, pharetra et odio non, sollicitudin bibendum enim.
              Integer posuere, est et posuere feugiat, nisi nunc auctor nisi, eu
              tristique ipsum justo ut tellus. Phasellus molestie ultricies
              sodales. Nunc nec ligula placerat, vehicula orci a, tincidunt
              ante. Donec ac metus quis nunc cursus tincidunt.
            </p>
            <p>
              Vivamus sed ullamcorper ex. Suspendisse potenti. Nam sodales
              hendrerit enim, non fringilla mauris gravida maximus. Sed pharetra
              purus eget quam auctor luctus. Aenean arcu nulla, aliquam ut
              consectetur non, tincidunt eget sem. Aliquam tristique mattis
              urna, a posuere justo dapibus nec. Aenean non lacinia nisl. Aenean
              ac bibendum eros. Integer posuere enim tempor auctor venenatis.
              Etiam convallis nunc at eros ultrices, et elementum erat ultrices.
            </p>
          </section>

          <section className="ArticleSection" id="second">
            <h2 className="ArticleH2">Second section</h2>
            <p>
              Phasellus congue felis quis arcu dignissim, pulvinar mollis ante
              pretium. Sed ac auctor quam. Mauris ac tellus et quam porta mattis
              quis quis quam. Sed tristique gravida mauris, eget eleifend nunc
              accumsan in.
            </p>
            <p>
              Donec consequat fringilla diam, sit amet aliquam magna faucibus
              vel. Sed sagittis id nisi et facilisis. Aliquam erat volutpat.
              Mauris arcu nunc, euismod at enim at, porttitor laoreet lorem. In
              molestie dui at augue aliquet, in tincidunt nisi dictum. Donec
              sagittis enim vestibulum est elementum, vel lobortis libero
              suscipit.
            </p>
            <p>
              Vivamus sed ullamcorper ex. Suspendisse potenti. Nam sodales
              hendrerit enim, non fringilla mauris gravida maximus. Sed pharetra
              purus eget quam auctor luctus. Aenean arcu nulla, aliquam ut
              consectetur non, tincidunt eget sem. Aliquam tristique mattis
              urna, a posuere justo dapibus nec. Aenean non lacinia nisl. Aenean
              ac bibendum eros. Integer posuere enim tempor auctor venenatis.
              Etiam convallis nunc at eros ultrices, et elementum erat ultrices.
            </p>
          </section>

          <section className="ArticleSection" id="third">
            <h2 className="ArticleH2">Third section</h2>
            <p>
              Etiam id ex dolor. Curabitur quis tellus vitae neque finibus
              suscipit. Donec vel nisl ac justo mattis molestie. Vivamus in
              interdum est. Fusce sed malesuada tellus. Suspendisse imperdiet
              condimentum sem in tristique. Donec faucibus dui non pharetra
              cursus. Praesent congue turpis leo, vitae porttitor elit fringilla
              vel. Phasellus ut aliquet augue. Donec egestas luctus placerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nisi nisl, pharetra et odio non, sollicitudin bibendum enim.
              Integer posuere, est et posuere feugiat, nisi nunc auctor nisi, eu
              tristique ipsum justo ut tellus. Phasellus molestie ultricies
              sodales. Nunc nec ligula placerat, vehicula orci a, tincidunt
              ante. Donec ac metus quis nunc cursus tincidunt.
            </p>
            <p>
              Vivamus sed ullamcorper ex. Suspendisse potenti. Nam sodales
              hendrerit enim, non fringilla mauris gravida maximus. Sed pharetra
              purus eget quam auctor luctus. Aenean arcu nulla, aliquam ut
              consectetur non, tincidunt eget sem. Aliquam tristique mattis
              urna, a posuere justo dapibus nec. Aenean non lacinia nisl. Aenean
              ac bibendum eros. Integer posuere enim tempor auctor venenatis.
              Etiam convallis nunc at eros ultrices, et elementum erat ultrices.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
          </section>

          <section className="ArticleSection" id="fourth">
            <h2 className="ArticleH2">Fourth section</h2>
            <p>
              Aenean purus ex, auctor id dictum in, consequat ac lacus. Fusce
              aliquam tellus sed ante porttitor eleifend. Nam rutrum vulputate
              arcu sed euismod. Fusce diam nunc, cursus eget leo eget, interdum
              tempus arcu. Maecenas vestibulum faucibus dolor non fermentum.
              Donec tortor dui, aliquet vitae mauris id, condimentum eleifend
              felis.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
            <p>
              Vivamus sed ullamcorper ex. Suspendisse potenti. Nam sodales
              hendrerit enim, non fringilla mauris gravida maximus. Sed pharetra
              purus eget quam auctor luctus. Aenean arcu nulla, aliquam ut
              consectetur non, tincidunt eget sem. Aliquam tristique mattis
              urna, a posuere justo dapibus nec. Aenean non lacinia nisl. Aenean
              ac bibendum eros. Integer posuere enim tempor auctor venenatis.
              Etiam convallis nunc at eros ultrices, et elementum erat ultrices.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
            <p>
              Aenean purus ex, auctor id dictum in, consequat ac lacus. Fusce
              aliquam tellus sed ante porttitor eleifend. Nam rutrum vulputate
              arcu sed euismod. Fusce diam nunc, cursus eget leo eget, interdum
              tempus arcu. Maecenas vestibulum faucibus dolor non fermentum.
              Donec tortor dui, aliquet vitae mauris id, condimentum eleifend
              felis.
            </p>
          </section>

          <section className="ArticleSection" id="fifth">
            <h2 className="ArticleH2">Fifth section</h2>
            <p>
              Vivamus in elit non turpis eleifend egestas eget scelerisque
              turpis. Integer semper eget sem vel porttitor. Phasellus nec
              rhoncus elit. Donec feugiat mollis dui ac vehicula. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
            <p>
              Fusce quis rutrum turpis. Proin pulvinar, nisi id porttitor
              laoreet, neque diam finibus eros, a aliquam nibh libero quis nisi.
              Morbi vehicula tincidunt maximus.
            </p>
          </section>

          <section className="ArticleSection" id="sixth">
            <h2 className="ArticleH2">Sixth section</h2>
            <p>
              Etiam id ex dolor. Curabitur quis tellus vitae neque finibus
              suscipit. Donec vel nisl ac justo mattis molestie. Vivamus in
              interdum est. Fusce sed malesuada tellus. Suspendisse imperdiet
              condimentum sem in tristique. Donec faucibus dui non pharetra
              cursus. Praesent congue turpis leo, vitae porttitor elit fringilla
              vel. Phasellus ut aliquet augue. Donec egestas luctus placerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nisi nisl, pharetra et odio non, sollicitudin bibendum enim.
              Integer posuere, est et posuere feugiat, nisi nunc auctor nisi, eu
              tristique ipsum justo ut tellus. Phasellus molestie ultricies
              sodales. Nunc nec ligula placerat, vehicula orci a, tincidunt
              ante. Donec ac metus quis nunc cursus tincidunt.
            </p>
            <p>
              Vivamus sed ullamcorper ex. Suspendisse potenti. Nam sodales
              hendrerit enim, non fringilla mauris gravida maximus. Sed pharetra
              purus eget quam auctor luctus. Aenean arcu nulla, aliquam ut
              consectetur non, tincidunt eget sem. Aliquam tristique mattis
              urna, a posuere justo dapibus nec. Aenean non lacinia nisl. Aenean
              ac bibendum eros. Integer posuere enim tempor auctor venenatis.
              Etiam convallis nunc at eros ultrices, et elementum erat ultrices.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
          </section>

          <section className="ArticleSection" id="seventh">
            <h2 className="ArticleH2">Seventh section</h2>
            <p>
              Aenean purus ex, auctor id dictum in, consequat ac lacus. Fusce
              aliquam tellus sed ante porttitor eleifend. Nam rutrum vulputate
              arcu sed euismod. Fusce diam nunc, cursus eget leo eget, interdum
              tempus arcu. Maecenas vestibulum faucibus dolor non fermentum.
              Donec tortor dui, aliquet vitae mauris id, condimentum eleifend
              felis.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
            <p>
              Vivamus sed ullamcorper ex. Suspendisse potenti. Nam sodales
              hendrerit enim, non fringilla mauris gravida maximus. Sed pharetra
              purus eget quam auctor luctus. Aenean arcu nulla, aliquam ut
              consectetur non, tincidunt eget sem. Aliquam tristique mattis
              urna, a posuere justo dapibus nec. Aenean non lacinia nisl. Aenean
              ac bibendum eros. Integer posuere enim tempor auctor venenatis.
              Etiam convallis nunc at eros ultrices, et elementum erat ultrices.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
          </section>

          <section className="ArticleSection" id="eighth">
            <h2 className="ArticleH2">Eighth section</h2>
            <p>
              Vivamus in elit non turpis eleifend egestas eget scelerisque
              turpis. Integer semper eget sem vel porttitor. Phasellus nec
              rhoncus elit. Donec feugiat mollis dui ac vehicula. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
            <p>
              Fusce quis rutrum turpis. Proin pulvinar, nisi id porttitor
              laoreet, neque diam finibus eros, a aliquam nibh libero quis nisi.
              Morbi vehicula tincidunt maximus.
            </p>
            <p>
              Vivamus in elit non turpis eleifend egestas eget scelerisque
              turpis. Integer semper eget sem vel porttitor. Phasellus nec
              rhoncus elit. Donec feugiat mollis dui ac vehicula. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p>
              In aliquam maximus dui, nec iaculis nunc gravida et. Cras dapibus
              porta est, sed finibus arcu viverra in. Vivamus volutpat placerat
              urna, non varius sapien tempxor sit amet. Cras quis dictum enim.
              Vestibulum ac rhoncus diam, non venenatis dolor. Curabitur ut
              velit tincidunt, pulvinar dolor sit amet, tincidunt arcu. Integer
              at ipsum eu ex blandit consectetur.
            </p>
            <p>
              Fusce quis rutrum turpis. Proin pulvinar, nisi id porttitor
              laoreet, neque diam finibus eros, a aliquam nibh libero quis nisi.
              Morbi vehicula tincidunt maximus.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}

export default Article;
