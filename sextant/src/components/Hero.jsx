import React from "react";
import axios from "axios";
import IpExhibit from "./IpExhibit.jsx";

export default function Hero() {
  return (
    <div className="main_content">
      <IpExhibit />
      <div className="data_points">
        <div className="activity_chart">Activity chart</div>
        <div className="data_points-middle">
          <div className="middle-card"></div>
          <div className="middle-card"></div>
          <div className="middle-card"></div>
        </div>
        <div className="data_points-right">Tasks</div>
      </div>
    </div>
  );
}
