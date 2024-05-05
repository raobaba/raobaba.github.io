import React, { useEffect } from "react";
import styles from "../styles/Work.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";

function Work() {
  useEffect(() => {
    applyScrollReveal(".scrollview");
  }, []);

  return (
    <div id="Work" className="scrollview">
      <h1>Work</h1>
      <div className={common.boxes}></div>
    </div>
  );
}

export default Work;
