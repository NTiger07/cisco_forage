import React from "react";
import Header from "./Header.jsx";
import axios from "axios";

import "../App.css";
import Exhibit from "./Exhibit.jsx";

export default function App() {
  //CODE FOR RETRIEVING IP ADDRESSES
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

  // CODE FOR RETRIEVING LATENCY INFO
  const [latencyInfo, setLatencyInfo] = React.useState();

  React.useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");

    ws.onmessage = function getInfo(e) {
      var serverTime = Number(e.data);
      var clientTime = new Date().getTime();
      const latency = (clientTime - serverTime) / 1000;
      setLatencyInfo(latency);
    };
  }, []);

  return (
    <div className="main_container">
      <Header />
      <Exhibit
        exhibitTitle="Your IP addresses are: "
        exhibitChildren={
          <>
            <span>{v4address}</span>
            <span>{v6address}</span>
          </>
        }
      />
      <Exhibit
        exhibitTitle="Server response Latency is: "
        exhibitChildren={
          <>
            <span>{latencyInfo} seconds</span>
          </>
        }
      />
    </div>
  );
}
