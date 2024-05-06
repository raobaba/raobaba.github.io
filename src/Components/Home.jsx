import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";
import Typewriter from "typewriter-effect";

function Home() {
  useEffect(() => {
    applyScrollReveal(".scrollview");
  }, []);

  return (
    <>
      <div id="home" style={{ paddingTop: "100px" }} className="scrollview">
        <div className={common.boxes}>
          <div className={styles.aboutContainer}>
            <div className={styles.content}>
              <div className={styles.aboutText}>
                <h2>Hello 👋.</h2>
                <p>My name is Rajan Kumar.</p>
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer.",
                      "Tech Enthusiast.",
                      "Life Long Learner",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <button>Resume</button>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.imageWithCircle}>
                <img src="/profile.png" alt="Rajan Kumar" width={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
