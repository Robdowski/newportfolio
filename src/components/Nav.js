import React from "react";
import "../css/Nav.css";
import { Link } from 'react-router-dom'


const Nav = (props) => {
  return (
    <div className="nav-bar"><Link to="/">
      <div className="nav-header-container">
        
        <h2 className="nav-header">RC</h2>
        <h2 className="nav-header-two">.DEV</h2>
      </div></Link>
      <div className="nav-container">
        <a href="https://github.com/Robdowski?tab=repositories" target='_blank'>Github</a>
        <a href="https://www.linkedin.com/in/robert-carter-72824918a/" target='_blank'>LinkedIn</a>
        <Link className="link" to="/portfolio">Portfolio</Link>
        <a href="#main" onClick={e => props.setModal(true)}>Contact</a> 
      </div>
    </div>
  );
};

export default Nav;
