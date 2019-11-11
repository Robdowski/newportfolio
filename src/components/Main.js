import React from "react";
import "../css/Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-header">
        <h1>Robert Carter</h1>
        <div className="sub-header">
          <h3>Web Dev Portfolio</h3>
          <i class="far fa-arrow-alt-circle-right"></i>
        </div>
      </div>
      <div className="main-icons">
        <a href='https://github.com/Robdowski?tab=repositories' target='_blank'><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/robert-carter-72824918a/" target='_blank'><i class="fab fa-linkedin-in"></i></a>
        <a href="#projects"><i class="fas fa-folder-open"></i></a>
        <i class="fas fa-envelope"></i>
      </div>
    </div>
  );
};

export default Main;
