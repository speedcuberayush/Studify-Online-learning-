import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import "./styles/explore.css";

function ExploreNavigation({ activeTab, onChange }) {
  return (
    <div className="ExploreNavigation">
      <Box sx={{ bgcolor: "#000" }}>
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
        </Tabs>
      </Box>
    </div>
  );
}

function Part1() {
  return (
    <>
      <div>NEWS PARTS</div>
    </>
  );
}

function Part2() {
  return (
    <>
      <div>INTERNSHIP OPPORTUNITIES</div>
    </>
  );
}

function Part3() {
  return (
    <>
      <div>FREELANCING OPPORTUNITIES</div>
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
        <div
          className="exploreContent"
          style={{
            height: "calc(100vh - 100px-3.5rem)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {activeTab === 0 && <Part1 />}
          {activeTab === 1 && <Part2 />}
          {activeTab === 2 && <Part3 />}
        </div>
      </div>
    </div>
  );
}

export default Explore;
