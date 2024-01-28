import React from "react";
import styles from "../styles/Work.module.css";
function Work({ isDarkMode }) {
  return (
    <div id="work" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Work</h1>
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

export default Work;
