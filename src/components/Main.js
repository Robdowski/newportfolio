import React, { useEffect} from "react";
import "../css/Main.css";
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'

const Main = (props) => {
  const styles1 = useSpring({to: {opacity:1 }, from: {opacity:0 }, delay: 150, config: {duration:2000}})
  const styles2 = useSpring({to: {opacity:1 }, from: {opacity:0 }, delay: 300, config: {duration:2000}})
  const styles3 = useSpring({to: {opacity:1 }, from: {opacity:0 }, delay: 450, config: {duration:2000}})
 
  return (
    <div className="main-container" id="main" onClick={e => props.modal === true ? props.setModal(false) : null}>
      <div className="main-header">
        <animated.h1 style={styles1}>Robert Carter</animated.h1>
        <animated.div style={styles2} className="sub-header">
          <Link to="/portfolio"><h3>Web Dev Portfolio</h3></Link>
          <Link to="/portfolio"><i class="far fa-arrow-alt-circle-right"></i></Link>
        </animated.div>
      </div>
      <animated.div style={styles3} className="main-icons">
        <a href='https://github.com/Robdowski?tab=repositories' target='_blank'><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/robert-carter-72824918a/" target='_blank'><i class="fab fa-linkedin-in"></i></a>
        <Link to="/portfolio"><i class="fas fa-folder-open"></i></Link>
        <a href="#main"><i class="fas fa-envelope" onClick={e => props.setModal(true)}></i></a>
      </animated.div>
    </div>
  );
};

export default Main;
