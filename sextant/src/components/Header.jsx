import React from "react";
import Logo from "../assets/sextant.png";

export default function Header() {
  return (
    <div className="header_container">
      <img className="logo" src={Logo} alt="logo" />
      <h1>Sextant Monitor</h1>
    </div>
  );
}
