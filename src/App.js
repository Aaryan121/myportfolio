import AboutMe from "./components/about/AboutMe";
import Hero from "./components/hero/Hero";
import HomeImg from "./components/homeimg/HomeImg";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import "./main.css"

function App() {
  return (
    <div className="main">
      <div className="container">
        <Navbar />
        <Hero />
        <Skills />
        <AboutMe/>
        <Projects />
      </div>
    </div>
  );
}

export default App;
