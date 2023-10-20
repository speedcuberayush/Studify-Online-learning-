import React, { useState } from "react";
import "./styles/Learn.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TimelineIcon from "@mui/icons-material/Timeline";
import FeedIcon from "@mui/icons-material/Feed";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ExploreLearn from "./Learn/ExploreLearn.jsx";
import Course from "./Learn/Course";
import References from "./Learn/References";
import Articles from "./Learn/Articles/Articles";
import AccordianFaq from "./Learn/Articles/AccordianFaq";
import ContentGrid from "./Learn/Articles/ContentGrid";
import CourseVideo from "./Learn/CourseVideo";
import { ChapterAIML, ChapterDAA, ChapterOS } from "./Learn/Chapters";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Learn() {
  const faqs = [
    {
      id: 1,
      header: "STEP 1",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 2,
      header: "STEP 2",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 3,
      header: "STEP 3",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 4,
      header: "STEP 4",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
  ];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Learnwalapart">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "calc(100vh - 100px)", // Adjusted height calculation
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="sidebarhumainjatihaikya"
          sx={{
            backgroundColor: "#000",
            width: "155px",
            borderRight: 1,
            borderColor: "divider",
            "& .MuiTabs-indicator": {
              left: 0, // Keep the indicator at the left side
              border: 2,
              borderColor: "#0096ff",
              borderRadius: "10px",
            },
            "& .MuiTab-root": {
              color: "#fff",
              "&.Mui-selected": {
                color: "#0096ff",
              },
            },
          }}
        >
          {/* Tab components */}
          <Tab
            className="sidebarhumainjatihaikya"
            icon={<AssessmentIcon />}
            label="EXPLORE"
            {...a11yProps(0)}
          />
          <Tab
            className="sidebarhumainjatihaikya"
            icon={<AutoStoriesIcon />}
            label="COURSES"
            {...a11yProps(1)}
          />
          <Tab
            className="sidebarhumainjatihaikya"
            icon={<FeedIcon />}
            label="ARTICLES"
            {...a11yProps(2)}
          />
          <Tab
            className="sidebarhumainjatihaikya"
            icon={<TimelineIcon />}
            label="ROADMAPS"
            {...a11yProps(3)}
          />
          <Tab
            className="sidebarhumainjatihaikya"
            icon={<AutoAwesomeMosaicIcon />}
            label="REFERENCES"
            {...a11yProps(4)}
          />
        </Tabs>
        <div
          style={{
            flex: 1,
            overflowY: "auto", // Allow the content to scroll
            // padding: "20px", // Add some padding
          }}
        >
          {/* TabPanel components */}
          <TabPanel value={value} index={0}>
            <ExploreLearn />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CourseVideo />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ContentGrid />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Course />
            <AccordianFaq title={"CONTENT LIST"} faqs={faqs} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <References />
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}
