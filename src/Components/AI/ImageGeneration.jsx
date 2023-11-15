import "./ImageGeneartion.css";
import React, { useState, useRef } from "react";
import default_image from "./default_image.svg";

function ImageGeneration() {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );
    let data = await response.json();
    let data_array = data.data;

    if (data_array && data_array.length > 0) {
      setImage_url(data_array[0].url);
    } else {
      // Handle the case where data_array is undefined or empty
      // You can set a default value for `image_url` or show an error message
      setImage_url(default_image);
    }

    setLoading(false);
  };

  return (
    <div className="imageContainer" >
      <div className="ai-image-generator">
        <div className="ai-header">
          Ai image <span>generator</span>
        </div>
        <div className="aiimg-loading">
          <div className="aiimage">
            <img src={image_url} alt="" />
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
            placeholder="describe what you want to see"
          />
          <div
            className="ai-generate-btn"
            onClick={() => {
              imageGenerator();
            }}
          >
            Generate
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGeneration;
