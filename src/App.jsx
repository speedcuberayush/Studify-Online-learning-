import React from "react";
import ProjectPreloader from "./Components/Projectpreloader.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import Landingpage from "./Components/Landingpage.jsx";
import Error404 from "./Components/Error404.jsx";
function App() {
  return (
    <div className="app">
      {/* <ProjectPreloader /> */}
      {/* <Landingpage /> */}
      {/* <PageTransition /> */}
      <Error404 />
    </div>
  );
}

export default App;
