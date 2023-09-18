import React from "react";
import "./styles/Chat.css";

function Chat() {
  return (
    <div
      className="banter-loader"
      style={{
        height: "calc(100vh-100px)",
      }}
    >
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
    </div>
  );
}

export default Chat;
