import React from "react";
import ProjectPreloader from "./Components/Projectpreloader.jsx";
import PageTransition from "./Components/PageTransition.jsx";
import Landingpage from "./Components/Landingpage.jsx";
import Authenticationpage from "./Components/Authenticationpage.jsx";
import Error404 from "./Components/Error404.jsx";

function App() {
  return (
    <div className="app">
      <Landingpage />
      {/* <PageTransition /> */}
      {/* <Authenticationpage /> */}
      {/* <Error404 /> */}
    </div>
  );
}

export default App;
