import React, { useState, useRef } from "react";

function VideoAI() {
  const [videoUrl, setVideoUrl] = useState("");
  let inputRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const videoGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);

    // Make an API call for video generation (replace the URL and payload accordingly)
    const response = await fetch(
      "https://api.example.com/v1/videos/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_KEY",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          duration: 60, // Specify the desired video duration
          resolution: "720p", // Specify the desired video resolution
        }),
      }
    );

    let data = await response.json();

    // Extract the video URL from the response
    let generatedVideoUrl = data.videoUrl;

    setVideoUrl(generatedVideoUrl);
    setLoading(false);
  };

  return (
    <div className="videoContainer">
      <div className="ai-video-generator">
        <div className="ai-header">
          AI Video <span>Generator</span>
        </div>
        <div className="aivideo-loading">
          <div className="aivideo">
            {/* Assuming a video is displayed using a video element */}
            <video
              controls
              width="400"
              src={videoUrl}
              alt="Generated Video"
            ></video>
          </div>
          <div className="ailoading">
            <div
              className={loading ? "ailoadingbarfull" : "ailoadingbar"}
            ></div>
            <div className={loading ? "ailoadingtext" : "display-none"}>
              Loading...
            </div>
          </div>
        </div>
        <div className="ai-search-box">
          <input
            type="text"
            ref={inputRef}
            className="ai-search-input"
            placeholder="Describe what you want to see in the video"
          />
          <div
            className="ai-generate-btn"
            onClick={() => {
              videoGenerator();
            }}
          >
            Generate Video
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoAI;
