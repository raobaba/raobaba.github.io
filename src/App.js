import "./App.css";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Navbar from "./Navbar/Navbar";
import Routing from "./Route/Route";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div >
        <Home />
        <About />
        <Skills />
        <Work />
        <Certificate />
        <Contact />
      </div>
    </div>
  );
}

export default App;
