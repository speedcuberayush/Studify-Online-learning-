import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
      <div className="app">
        {loading ? (
          <ProjectPreloader /> // Display the preloader while loading
        ) : (
          <>
            {/* Render Navbar outside the Routes */}
            <Navbar />
            <Routes>
              <Route path={"/"} element={<Landingpage />} />
              {/* Don't render Navbar in /login */}
              <Route path={"/login"} element={<Authenticationpage />} />
              <Route path={"/aboutus"} element={<Aboutus />} />
              <Route path={"/transition"} element={<PageTransition />} />
              <Route path={"/chat"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              {/* Render Navbar in Error404 */}
              <Route path={"*"} element={<Error404 />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
