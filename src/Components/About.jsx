import React from "react";
import styles from "../Style/About.module.css";
function About({ isDarkMode }) {
  return (
    <div id="about" className={isDarkMode ? styles.darkMode : ""}>
      <h1>About</h1>
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

export default About;
