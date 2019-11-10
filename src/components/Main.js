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
        <i class="fab fa-github"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fas fa-envelope"></i>
      </div>
    </div>
  );
};

export default Main;
