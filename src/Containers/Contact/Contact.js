import React, { Component } from 'react';
import './Contact.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedIn from './LinkedIn2.png';
import GitHub from './GitHub128.png';
import Email from './email128-2.png';
import Youtube from './youtube128.png';




class Contact extends Component {
    render() {
        return (
            <div className="contact-section" id='contact'>

            <h1> Contact me! </h1>

            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs="3" md="2" className="d-flex justify-content-center">
                        <a href="https://github.com/TheGalekxy" target="_blank" rel="noopener noreferrer">
                            <Image src={GitHub} fluid />
                        </a>
                    </Col>
                    <Col xs="3" md="2" className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/adamgalek/" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedIn} fluid/>
                        </a>
                    </Col>
                    <Col xs="3" md="2" className="d-flex justify-content-center">
                        <a href="https://www.youtube.com/channel/UCvkAweO7HT1d0gUBLX_13Ag" target="_blank" rel="noopener noreferrer">
                            <Image src={Youtube} fluid />
                        </a>
                    </Col>
                    <Col xs="3" md="2" className="d-flex justify-content-center">
                        <a href="mailto:galekxy94@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image src={Email} fluid />
                        </a>
                    </Col>
                </Row>
            </Container>

            </div>
        )
    } 
  }
  
  export default Contact;
  