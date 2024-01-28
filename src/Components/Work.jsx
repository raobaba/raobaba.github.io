import React from "react";
import styles from "../styles/Work.module.css";
import common from '../styles/Common.module.css';
function Work({ isDarkMode }) {
  return (
    <div id="work" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Work</h1>
      <div className={common.boxes}></div>
    </div>
  );
}

export default Work;
