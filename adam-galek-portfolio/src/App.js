import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Logo from './Logo';
import About from './About';
import AboutPhoto from './AboutPhoto';


function App() {
  return (
    <div>
      <div className="App">
        <Navigation />
        <Logo />
      </div>
      {/* <About /> */}
      <AboutPhoto />
    </div>
  );
}

export default App;
