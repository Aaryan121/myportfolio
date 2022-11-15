import Hero from "./components/hero/Hero";
import HomeImg from "./components/homeimg/HomeImg";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import "./main.css"

function App() {
  return (
    <div className="main">
      <div className="container">
        <Navbar />
        <Hero />
        <Skills />
      </div>
    </div>
  );
}

export default App;
