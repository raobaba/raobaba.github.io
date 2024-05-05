import React, { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Navbar from "./Navbar/Navbar";
import styles from './styles/Common.module.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`App ${isDarkMode ? "dark" : ""}`}
      style={{ userSelect: "none" }}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className={isDarkMode ? styles.darkMode : ""}>
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
