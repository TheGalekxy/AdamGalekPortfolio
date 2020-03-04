import React from 'react';
import ProfilePhoto from './Adam2.png';
import Image from 'react-bootstrap/Image';
import { Col, Row, Container } from "react-bootstrap";
// import './AboutPhoto.css';



const About = () => {
    return (
        <div>
            <h1 className="f1 near-white garamond"> Adam Galek </h1>
            <Container>
            <Row>
                <Col></Col>
                <Col xs={5} md={8}>
                <Image src={ProfilePhoto} rounded />
                </Col>
                <Col></Col>
            </Row>
            </Container>
            <p className='f3 tc near-white garamond'>Hi, I'm Adam. An Archaeologist turned Web Developer.</p>
        </div>
        
    )
}

export default About;