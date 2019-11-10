import React from "react";
import '../css/Trilogy.css'

const Trilogy = () => {
  return (
    <div className="trilogy-container">
      <div className="trilogy one">
        <h3>Project One</h3>
        <p>This project was built using a technology</p>
        <a href="#">
          <i class="fas fa-file-code"></i>
        </a>
        <a href="#">
          <i class="fas fa-desktop"></i>
        </a>
        <div className="trilogy-skills"></div>
      </div>
      <div className="trilogy two">
        <h3>Project Two</h3>
        <p>This project was built using a technology</p>
        <a href="#">
          <i class="fas fa-file-code"></i>
        </a>
        <a href="#">
          <i class="fas fa-desktop"></i>
        </a>
        <div className="trilogy-skills"></div>
      </div>
      <div className="trilogy three">
        <h3>Project Three</h3>
        <p>This project was built using a technology</p>
        <a href="#">
          <i class="fas fa-file-code"></i>
        </a>
        <a href="#">
          <i class="fas fa-desktop"></i>
        </a>
        <div className="trilogy-skills"></div>
      </div>
    </div>
  );
};

export default Trilogy;
