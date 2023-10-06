import React from "react";
import styles from "../Style/Contact.module.css";
function Contact({ isDarkMode }) {
  return (
    <div id="contact" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Contact</h1>
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

export default Contact;
