import React from "react";
import styles from "../styles/Experience.module.css";
import common from '../styles/Common.module.css';
function Experience({ isDarkMode }) {
  return (
    <>
    
    <div id="experience" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Experience</h1>
      <div className={common.boxes}></div>
    </div>
    </>
  );
}

export default Experience;
