import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Containers/NavBar/NavBar.js';
import AboutMe from './Containers/AboutMe/AboutMe.js';
import Projects from './Containers/Projects/Projects.js';
import Contact from './Containers/Contact/Contact';

function App() {
  return (
    <>
      <Navigationbar />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

