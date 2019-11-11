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
        <a href="https://github.com/Robdowski?tab=repositories" target='_blank'>Github</a>
        <a href="https://www.linkedin.com/in/robert-carter-72824918a/" target='_blank'>LinkedIn</a>
        <a href="#projects">Projects</a>
        <a href="#">Contact</a> 
      </div>
    </div>
  );
};

export default Nav;
