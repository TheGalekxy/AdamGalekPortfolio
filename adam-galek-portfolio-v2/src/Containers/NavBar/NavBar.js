import React, { Component } from 'react';
import { Link } from 'react-scroll'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './AdamGalekLogo3.png';

class Navigationbar extends Component {



  
    render() {
        return (
      <div>
        <div > 
           
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
            <Navbar.Collapse >
              <Nav className="ml-auto" variant="pills" defaultActiveKey={1} >
                <Nav.Item>
                <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration= {500}
                    > 
                    <Nav.Link eventKey={1} >
                      About Me
                    </Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                          activeClass="active"
                          to="projects"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration= {500}
                      > 
                      <Nav.Link eventKey={2} >
                        Projects
                      </Nav.Link>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                      > 
                      <Nav.Link eventKey={3} >
                        Contact
                      </Nav.Link>
                  </Link>
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
  