import React from "react";
import "../css/Main.css";

const Main = (props) => {
  return (
    <div className="main-container" id="main" onClick={e => props.modal === true ? props.setModal(false) : null}>
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
        <a href="#main"><i class="fas fa-envelope" onClick={e => props.setModal(true)}></i></a>
      </div>
    </div>
  );
};

export default Main;
