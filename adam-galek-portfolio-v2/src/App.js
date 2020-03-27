import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './NavBar.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';

function App() {
  return (
    <>
      <Navigationbar />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
