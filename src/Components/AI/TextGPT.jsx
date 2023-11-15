import React, { useState, useRef } from "react";

function TextGPT() {
  const [generatedText, setGeneratedText] = useState("");
  let inputRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const textGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);

    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci/completions", // Replace with the correct API endpoint for text generation
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
          max_tokens: 100, // Adjust as needed
        }),
      }
    );
    let data = await response.json();

    // Extract the generated text from the response
    let generatedText = data.choices[0].text;

    setGeneratedText(generatedText);
    setLoading(false);
  };

  return (
    <div className="textContainer">
      <div className="ai-text-generator">
        <div className="ai-header">
          AI Text <span>Generator</span>
        </div>
        <div className="aitext-loading">
          <div className="aitext">
            <p>{generatedText}</p>
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
            placeholder="describe what you want to generate"
          />
          <div
            className="ai-generate-btn"
            onClick={() => {
              textGenerator();
            }}
          >
            Generate
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextGPT;
