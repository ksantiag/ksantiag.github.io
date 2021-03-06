import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
 import Resume from "./components/Resume.jsx";
// import Post from "./components/Post.jsx";
// import Project from "./components/Project.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    
      <HashRouter>
        <NavBar></NavBar>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
       <Route component={Resume} path="/resume" />
        
      </HashRouter>
   
  );
}

export default App;
