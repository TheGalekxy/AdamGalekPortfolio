import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './AdamGalekLogo3.png';

function App() {
  return (
    <div className="App">
      <>
  
  
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src={Logo}
        width="auto"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
</>
    </div>
  );
}

export default App;
