import React from "react";
import styles from "../styles/Skill.module.css";
import common from "../styles/Common.module.css";
function Project({ isDarkMode }) {
  return (
    <>
    
      <div id="project" className={isDarkMode ? styles.darkMode : ""}>
        <h1>Projects</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default Project;
