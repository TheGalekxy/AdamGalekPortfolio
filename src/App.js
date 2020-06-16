import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Containers/NavBar/NavBar.js';
import AboutMe from './Containers/AboutMe/AboutMe.js';
import Projects from './Containers/Projects/Projects.js';
import Contact from './Containers/Contact/Contact';

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-169751455-1')


    // to report page view
    ReactGA.pageview('/')
  }, [])

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

