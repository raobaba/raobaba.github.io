import React, { useState } from "react";

import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Navbar from "./Navbar/Navbar";
import Project from "./Components/Project";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // const disableRightClick = (e) => {
  //   e.preventDefault();
  // }; 
  
  // document.addEventListener("contextmenu", disableRightClick);

  // const disableCopyAndPaste = (e) => {
  //   e.preventDefault();
  // };

  // document.addEventListener("copy", disableCopyAndPaste);
  // document.addEventListener("cut", disableCopyAndPaste);
  // document.addEventListener("paste", disableCopyAndPaste);

  return (
    <div
      className={`App ${isDarkMode ? "dark" : ""}`}
      style={{ userSelect: "none" }}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div>
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Project isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Certificate isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
