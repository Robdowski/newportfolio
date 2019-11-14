import React from "react";
import '../css/Trilogy.css'


const Trilogy = (props) => {
  return (
    <div className="trilogy-container" id='projects' onClick={e => props.modal === true ? props.setModal(false) : null}>
      <div className="trilogy one">
        <h3>Save The Animals React App</h3>
        <img src={require('../css/photos/saveanimals.jpg')} className='trilogy-image' />
        <p>This project was built with the React framework with a fully functioning backend built with NodeJS and Express. The project utilizes Redux for state management and utilizes a RESTful API for HTTP requests.</p>
        <div className="trilogy-skills">
        <div className='trilogy-skills-header'>
          <h3>Technoligies</h3>
          </div>
          <div className='trilogy-skills-icons'>
          <i className="fab fa-react"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-html5"></i>
          </div>
        </div>
        <div className='trilogy-links'>
        <a href="#">
          <i className="fas fa-file-code"></i>
          <h3>Code</h3>
        </a>
        <a href="#">
          <i className="fas fa-desktop"></i>
          <h3>Live</h3>
        </a>
        </div>
      </div>
      <div className="trilogy two">
        <h3>Save The Animals React App</h3>
        <img src={require('../css/photos/saveanimals.jpg')} className='trilogy-image' />
        <p>This project was built with the React framework with a fully functioning backend built with NodeJS and Express. The project utilizes Redux for state management and utilizes a RESTful API for HTTP requests.</p>
        <div className="trilogy-skills">
        <div className='trilogy-skills-header'>
          <h3>Technoligies</h3>
          </div>
          <div className='trilogy-skills-icons'>
          <i className="fab fa-react"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-html5"></i>
          </div>
        </div>
        <div className='trilogy-links'>
        <a href="#">
          <i className="fas fa-file-code"></i>
          <h3>Code</h3>
        </a>
        <a href="#">
          <i className="fas fa-desktop"></i>
          <h3>Live</h3>
        </a>
        </div>
      </div>
      <div className="trilogy three">
        <h3>Save The Animals React App</h3>
        <img src={require('../css/photos/saveanimals.jpg')} className='trilogy-image' />
        <p>This project was built with the React framework with a fully functioning backend built with NodeJS and Express. The project utilizes Redux for state management and utilizes a RESTful API for HTTP requests.</p>
        <div className="trilogy-skills">
        <div className='trilogy-skills-header'>
          <h3>Technoligies</h3>
          </div>
          <div className='trilogy-skills-icons'>
          <i className="fab fa-react"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-css3"></i>
          <i class="fab fa-html5"></i>
          </div>
        </div>
        <div className='trilogy-links'>
        <a href="#">
          <i className="fas fa-file-code"></i>
          <h3>Code</h3>
        </a>
        <a href="#">
          <i className="fas fa-desktop"></i>
          <h3>Live</h3>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Trilogy;
