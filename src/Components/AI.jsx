import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DescriptionIcon from "@mui/icons-material/Description";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TextGPT from "./AI/TextGPT.jsx";
import ImageGeneration from "./AI/ImageGeneration.jsx";
import "./styles/ai.css";
import VideoAI from "./AI/VideoAI.jsx";

function AINavigation({ activeTab, onChange }) {
  return (
    <div className="AINavigation">
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
            className="AINavigation"
            icon={<DescriptionIcon />}
            label="CHAT"
            sx={{
              color: activeTab === 0 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            className="AINavigation"
            icon={<PhotoLibraryIcon />}
            label="IMAGE"
            sx={{
              color: activeTab === 1 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<LibraryMusicIcon />}
            label="MUSIC"
            className="AINavigation"
            sx={{
              color: activeTab === 2 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<VideoLibraryIcon />}
            label="VIDEO"
            className="AINavigation"
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
  return <TextGPT />;
}

function Part2() {
  return <ImageGeneration />;
}
function Part3() {
  return <ImageGeneration />;
}
function Part4() {
  return <VideoAI />;
}

function AI() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <div className="AIPage">
        <AINavigation activeTab={activeTab} onChange={handleTabChange} />
        <div className="AIContent">
          {activeTab === 0 && <Part1 />}
          {activeTab === 1 && <Part2 />}
          {activeTab === 2 && <Part3 />}
          {activeTab === 3 && <Part4 />}
        </div>
      </div>
    </div>
  );
}

export default AI;
