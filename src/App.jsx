import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Landingpage from "./Components/Landingpage.jsx";
import Authenticationpage from "./Components/Authenticationpage.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import Error404 from "./Components/Error404.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProjectPreloader from "./Components/Projectpreloader.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import "./App.css";
import "./Components/Chat.jsx";
import Chat from "./Components/Chat.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Learn from "./Components/Learn.jsx";
import AI from "./Components/AI.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 5500); // Adjust the duration as needed
  }, []);

  return (
    <BrowserRouter>
      <AppContent loading={loading} />
    </BrowserRouter>
  );
}

function AppContent({ loading }) {
  const location = useLocation(); // Get the current location

  const isNavbarVisible =
    !["/", "/login", "/home"].includes(location.pathname);

  return (
    <div className="app">
      {loading ? (
        <ProjectPreloader /> // Display the preloader while loading
      ) : (
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
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
