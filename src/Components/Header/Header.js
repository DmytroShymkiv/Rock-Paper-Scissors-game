import React from "react";
import Score from "./Score";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="rock-paper-scissors logo" className="logo" />
      <Score />
    </div>
  );
}
