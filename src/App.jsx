import React from "react";
import ProjectPreloader from "./Components/Projectpreloader.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import Landingpage from "./Components/Landingpage.jsx";
function App() {
  return (
    <div className="app">
      <ProjectPreloader name={"STUDIFY"} />
      {/* <Landingpage /> */}
      {/* <PageTransition /> */}
    </div>
  );
}

export default App;
