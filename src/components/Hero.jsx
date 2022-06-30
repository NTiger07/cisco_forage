import React from "react";

export default function Hero() {
  return (
    <div className="main_content">
      <div className="ip_container">
        <div className="ip_content">
          <h1>Your IP address is :</h1>
          <span>192.168.43.1:33455</span>
        </div>
      </div>
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
