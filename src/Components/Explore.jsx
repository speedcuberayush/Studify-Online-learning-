import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Intern from "./Explore/Intern";
import Freelancing from "./Explore/Freelancing";
import Events from "./Explore/Events";

import News from "./News";
import "./styles/explore.css";

function ExploreNavigation({ activeTab, onChange }) {
  return (
    <div className="ExploreNavigation">
      <Box sx={{ height: "75px", bgcolor: "#000" }}>
        <Tabs
          value={activeTab}
          onChange={onChange}
          centered
          TabIndicatorProps={{
            style: {
              backgroundColor: "#0096ff",
              height: 3.5,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }, // Adjust the height here
          }}
        >
          <Tab
            className="exploreNavigation"
            icon={<NewspaperIcon />}
            label="NEWS"
            sx={{
              color: activeTab === 0 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            className="exploreNavigation"
            icon={<AssignmentIndIcon />}
            label="INTERN"
            sx={{
              color: activeTab === 1 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<WorkHistoryIcon />}
            label="FREELANCE"
            className="exploreNavigation"
            sx={{
              color: activeTab === 2 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<NewReleasesIcon />}
            label="EVENTS"
            className="exploreNavigation"
            sx={{
              color: activeTab === 3 ? "#0096ff" : "#fff",
            }}
          />
        </Tabs>
      </Box>
    </div>
  );
}

function Part1() {
  return (
    <>
      <News />
    </>
  );
}

function Part2() {
  return (
    <>
      <div className="partone"> H3</div>
    </>
  );
}

function Part3() {
  return (
    <>
      <div className="partone"> H3</div>
    </>
  );
}
function Part4() {
  return (
    <>
      <div className="partone"> H4</div>
    </>
  );
}

function Explore() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <div className="explorePage">
        <ExploreNavigation activeTab={activeTab} onChange={handleTabChange} />
        <div className="exploreContent">
          {activeTab === 0 && <Part1 />}
          {activeTab === 1 && <Intern />}
          {activeTab === 2 && <Freelancing />}
          {activeTab === 3 && <Events />}
        </div>
      </div>
    </div>
  );
}

export default Explore;
