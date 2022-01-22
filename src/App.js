import About from "./About";
import AOS from 'aos';
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
AOS.init();

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />

       <Contact />
    </div>
  );
}

export default App;
