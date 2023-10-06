import React from "react";
import styles from "../Style/Skill.module.css";
function Skills({ isDarkMode }) {
  return (
    <div id="skills" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Skills</h1>
      <div
        style={{
          width: "90%",
          height: "400px",
          border: "1px solid black",
          margin: "auto",
        }}
      ></div>
    </div>
  );
}

export default Skills;
