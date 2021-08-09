import { HashRouter, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import NavBar from "./components/NavBar.jsx";
import PokeDex from "./components/PokeDex";

function App() {
  return (
    <HashRouter>
      <NavBar></NavBar>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={Resume} path="/resume" />
      <Route component={PokeDex} path="/pokedex" />
    </HashRouter>
  );
}

export default App;
