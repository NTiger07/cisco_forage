import React from "react";
import axios from "axios";

export default function Exhibit() {
  const [v4address, setV4address] = React.useState([]);
  const [v6address, setV6address] = React.useState([]);

  React.useEffect(() => {
    async function getipv4() {
      const v4 = await axios.get("https://api.ipify.org");
      setV4address(v4.data);
      return v4.data;
    }
    const ipv4 = getipv4();
  }, []);
  React.useEffect(() => {
    async function getipv6() {
      const v6 = await axios.get("https://api64.ipify.org");
      setV6address(v6.data);
      return v6.data;
    }
    const ipv6 = getipv6();
  }, []);

  return (
    <div className="main_content">
      <div className="ip_container">
        <div className="ip_content">
          <h1>Your IP addresses are :</h1>
          <span>IPv4: {v4address}</span>
          <span>IPv6: {v6address}</span>
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
