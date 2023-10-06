import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Navbar from "./Navbar/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div>
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Certificate isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
