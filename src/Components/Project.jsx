import React from "react";
import styles from "../styles/Skill.module.css";
import common from "../styles/Common.module.css";
function Project({ isDarkMode }) {
  return (
    <>
    
      <div id="skills" className={isDarkMode ? styles.darkMode : ""}>
        <h1>Skills</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default Project;
