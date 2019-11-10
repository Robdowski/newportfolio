import React from "react";
import "../css/Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-header-container">
        <h2 className="nav-header">RC</h2>
        <h2 className="nav-header-two">.DEV</h2>
      </div>
      <div className="nav-container">
        <a href="#">GitHub</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  );
};

export default Nav;
