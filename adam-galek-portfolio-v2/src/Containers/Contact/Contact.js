import React, { Component } from 'react';
import './Contact.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedIn from './LinkedIn2.png';
import GitHub from './GitHub128.png';
import Email from './email128-2.png';




class Contact extends Component {
    render() {
        return (
            <div>

            <h1> Contact me </h1>

            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs="4" md="4" className="d-flex justify-content-center">
                        <a href="http://www.google.ca">
                            <Image src={LinkedIn} fluid/>
                        </a>
                    </Col>
                    <Col xs="4" md="4" className="d-flex justify-content-center">
                        <a href="http://www.google.ca">
                            <Image src={GitHub} fluid />
                        </a>
                    </Col>
                    <Col xs="4" md="4" className="d-flex justify-content-center">
                        <a href="http://www.google.ca">
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
  