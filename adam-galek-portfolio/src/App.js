import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Logo from './Logo';
import About from './About';


function App() {
  return (
    <div>
      <div className="App">
        <Navigation />
        <Logo />
      </div>
      <About />
    </div>
  );
}

export default App;
