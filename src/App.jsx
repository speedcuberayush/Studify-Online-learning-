import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Landingpage from "./Components/Landingpage.jsx";
import Authenticationpage from "./Components/Authenticationpage.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import Error404 from "./Components/Error404.jsx";
import Navbar from "./Components/Navbar.jsx";
import Quiz from "./Components/Quiz.jsx";
import ProjectPreloader from "./Components/Projectpreloader.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import "./Components/Chat.jsx";
import Chat from "./Components/Chat.jsx";
import Home from "./Components/Home.jsx";
import Learn from "./Components/Learn.jsx";
import AI from "./Components/AI.jsx";
import Explore from "./Components/Explore.jsx";
import TestPage from "./Components/TestPage.jsx";
import Article from "./Components/Learn/Articles/Articles";
import AAIML from "./Components/Learn/Articles/AccordianFaqAIML.jsx";
import ADAA from "./Components/Learn/Articles/AccordianFaqDAA.jsx";
import AOS from "./Components/Learn/Articles/AccordianFaq.jsx";
import {
  ChapterAIML,
  ChapterDAA,
  ChapterOS,
} from "./Components/Learn/Chapters";
import News from "./Components/News";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5500); // Adjust the duration as needed
  // }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent({ loading }) {
  const location = useLocation(); // Get the current location

  const isNavbarVisible = !["/", "/login", "/home"].includes(location.pathname);

  return (
    <div className="app">
      {/* {loading ? (
        <ProjectPreloader /> // Display the preloader while loading
      ) : ( */}
      <>
        {/* Conditionally render Navbar */}
        {isNavbarVisible && <Navbar />}
        <Routes>
          <Route path={"/"} element={<Landingpage />} />
          <Route path={"/login"} element={<Authenticationpage />} />
          <Route path={"/aboutus"} element={<Aboutus />} />
          <Route path={"/transition"} element={<PageTransition />} />
          <Route path={"/chat"} element={<Chat />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/learn"} element={<Learn />} />
          <Route path={"/ai"} element={<AI />} />
          <Route path={"/explore"} element={<Explore />} />
          <Route path={"/article"} element={<Article />} />
          <Route path={"/ChapterAIML"} element={<ChapterAIML />} />
          <Route path={"/ChapterOS"} element={<ChapterOS />} />
          <Route path={"/ChapterDAA"} element={<ChapterDAA />} />
          <Route path={"/roadmap/DAA"} element={<ADAA />} />
          <Route path={"/roadmap/OS"} element={<AOS />} />
          <Route path={"/roadmap/AIML"} element={<AAIML />} />
          <Route path={"/quiz"} element={<Quiz />} />
          {/* <Route path={"/pro"} element={<Quiz/>} /> */}
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
