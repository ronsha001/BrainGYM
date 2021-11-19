import React from "react";
import "./topSection.css";

import Video from "../videos/Brain.mp4";
function TopSection() {
  return (
    <div className="top-container">
      <video src={Video} autoPlay loop muted/>

      <h1>LET'S EXPAND OUR BRAIN ABILITIES</h1>
      <p>What are you waiting for?</p>
      
      <div className="top-btns">
        <button className="get-start">GET STARTED</button>
        <button className="watch-trailer">WATCH TRAILER<i className="far fa-play-circle"></i></button>
      </div>

    </div>
  );
}

export default TopSection;
