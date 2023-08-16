import React from "react";
import ProjectPreloader from "./Components/Projectpreloader.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import Landingpage from "./Components/Landingpage.jsx";
import Authenticationpage from "./Components/Authenticationpage.jsx";
import Error404 from "./Components/Error404.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* <ProjectPreloader /> */}
          <Route path={"/"} element={<Landingpage />}></Route>
          <Route path={"/login"} element={<Authenticationpage />}></Route>
          <Route path={"/transition"} element={<PageTransition />}></Route>
          <Route path={"*"} element={<Error404 />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
