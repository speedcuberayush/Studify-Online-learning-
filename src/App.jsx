import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landingpage from "./Components/Landingpage.jsx";
import Authenticationpage from "./Components/Authenticationpage.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import Error404 from "./Components/Error404.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProjectPreloader from "./Components/Projectpreloader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 7-second loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        {isLoading && <ProjectPreloader />}
        <Routes>
          <Route path={"/"} element={<Landingpage />} />
          <Route path={"/login"} element={<Authenticationpage />} />
          <Route path={"/transition"} element={<PageTransition />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        {/* <Navbar /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
