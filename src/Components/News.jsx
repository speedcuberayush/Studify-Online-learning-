import React, { useState } from "react";
import "./News.css";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import FileOpenIcon from "@mui/icons-material/FileOpen";

function Feed() {
  const [isActive, setIsActive] = useState(false);

  const toggleFavorite = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="news">
      <div className="picFEED">mera content</div>
      <div className="FEEDOPTIONS">
        <li>
          <FavoriteIcon
            style={{
              color: isActive ? "#0096ff" : "inherit",
              cursor: "pointer",
              transition: "color 0.3s, transform 0.3s",
            }}
            onClick={toggleFavorite}
            className={isActive ? "active" : ""}
          />
          <p className="FeedOptionsText">REACT</p>
        </li>
        <li>
          <ForumIcon className="FEEDOPTiONICONHUBHAI" />
          <p className="FeedOptionsText">COMMENT</p>
        </li>
        <li>
          <ShareIcon className="FEEDOPTiONICONHUBHAI" />
          <p className="FeedOptionsText">SHARE</p>
        </li>
        <li>
          <FileOpenIcon className="FEEDOPTiONICONHUBHAI" />
          <p className="FeedOptionsText">OPEN EXTERNAL</p>
        </li>
      </div>
    </div>
  );
}
function News() {
  return (
    <>
      <div
        className="newsTOTAL"
        style={{
          // flex: "1",
          color: "#fff",
          borderLeft: "2px solid #fff",
          borderRight: "2px solid #fff",
          width: "55%",
          display: "flex",
          height: "calc(100vh - 170px)", // Adjust the value as needed

          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // overflowY: "scroll",
          padding: "10px",
        }}
      >
        <div
          className="newsPart"
          style={{
            flex: 1,
            // height: "calc(100vh-172px)",
            overflowY: "auto",
          }}
        >
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </div>
      </div>
    </>
  );
}

export default News;
