import React from "react";
import styles from "../styles/About.module.css";
import common from '../styles/Common.module.css';
function About({ isDarkMode }) {
  return (
    <>
    
    <div id="about" className={isDarkMode ? styles.darkMode : ""}>
      <h1>About</h1>
      <div className={common.boxes}></div>
    </div>
    </>
  );
}

export default About;
