import React, { useEffect } from "react";
import styles from "../styles/Skill.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";
function Skills({ isDarkMode }) {
  useEffect(() => {
    applyScrollReveal('.scrollview');
  }, []);
  return (
    <>
    
      <div id="skills" className={`${isDarkMode ? styles.darkMode : ""} scrollview`}>
        <h1>Skills</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default Skills;
