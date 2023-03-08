import React from 'react'
import { Routes, Route, Link} from "react-router-dom";
import Project from './Components/Projekts';
import Home from './Components/home';
import About from './Components/about';


const App = () => (

  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">My Projects</Link>
      </li>
      <li>
        <Link to="/project/javascript">My Javascript Project</Link>
      </li>
      <li>
        <Link to="/project/React">My React Project</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/:name" element={<Project />} />
    </Routes>
  </div>
);

export default App;

