import React, { useEffect } from "react";
import styles from "../styles/About.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";
function About() {
  useEffect(() => {
    applyScrollReveal('.scrollview');
  }, []);
  return (
    <>
      <div
        id="about"
        className="scrollview"
      >
        <h1>About</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default About;
