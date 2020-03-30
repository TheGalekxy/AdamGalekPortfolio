import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './AdamGalekLogo3.png';

class Navigationbar extends Component {
    render() {
        return (
            <div className="App">
        <div>  
          <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant='dark' >
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                width="auto"
                height="50"
                className="d-inline-block align-top"
                alt="Adam Galek's logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-auto" variant="pills" defaultActiveKey="/AboutMe">
                <Nav.Item >
                  <Nav.Link href="/AboutMe">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Projects"> Projects </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Contact">
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
        )
    } 
  }
  
  export default Navigationbar;
  