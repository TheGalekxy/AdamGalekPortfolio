import React, { Component } from 'react';
import "./Projects.css";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import StarWars from './StarWarsApi.PNG';
import SmartBrain from './SmartBrain.png';
import ComingSoon from './coming-soon-1.jpg';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImage from './React100.png';
import JavascriptImage from './Javascript96.png';
import CssImage from './CSS96.png';
import HtmlImage from './Html96.png';
import PostGresImage from './PostgresQL96.png';
import NpmImage from './Npm96.png';
import NodeJSImage from './NodeJS96.png';



class Projects extends Component {
    render() {
        return (
            <div className='projects-section' id='projects'>
            <h1> Projects </h1>
            <CardDeck id="CardMargins">
                <Card>
                    <Card.Img variant="top" src={StarWars} />
                    <Card.Body className="cardPadding">
                    <Card.Title>StarWars API Project</Card.Title>
                    <Card.Text class="text-muted">
                        <p>This is a project that retrieves and displayes information from a StarWars RESTish API and allows the user to search and filter through Characters in the StarWars Universe. 
                            The information being accessed via the API is displayed on each character card with the robot image changing based on the species of the character.
                        </p>
                    </Card.Text>
                    <Image src={HtmlImage} rounded />
                    <Image src={CssImage} rounded />
                    <Image src={JavascriptImage} rounded />
                    <Image src={ReactImage} rounded />
                    <Image src={NpmImage} rounded />
                    </Card.Body>
                    <Card.Footer>
                        <Button href="https://thegalekxy.github.io/StarWarsApi/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/StarWarsApi" target="_blank" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={SmartBrain} />
                    <Card.Body className="cardPadding">
                    <Card.Title> SmartBrain Full Stack Application </Card.Title>
                    <Card.Text class="text-muted">
                        <p>
                            This is a full-stack facial recognition application that was completed for "The Complete Web Developer in 2020: Zero to Mastery", a course on Udemy by Andrei Neagoie.
                        </p>
                        <p>
                            This application uses a custom database... to be continued
                        </p>
                    </Card.Text>

                    <Image src={HtmlImage} rounded />
                    <Image src={CssImage} rounded />
                    <Image src={JavascriptImage} rounded />
                    <Image src={ReactImage} rounded />
                    <Image src={NodeJSImage} rounded />
                    <Image src={PostGresImage} rounded />
                    <Image src={NpmImage} rounded />

                        {/* <Container>
                            <Row>
                                <Col xs="7" md="4" className="d-flex justify-content-center">
                                    <Image src={ReactImage}/>
                                </Col>
                                <Col xs="7" md="4" className="d-flex justify-content-center">
                                    <Image src={JavascriptImage}/>
                                </Col>
                                <Col xs="7" md="4" className="d-flex justify-content-center">
                                    <Image src={CssImage} />
                                </Col>
                                <Col xs="7" md="4" className="d-flex justify-content-center">
                                    <Image src={HtmlImage} />
                                </Col>
                            </Row>
                        </Container> */}
                    </Card.Body>
                    <Card.Footer>
                        <Button href="https://smart-brain-galek.herokuapp.com/" target="_blank" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/smart-brain-front-end" target="_blank" size="lg" block variant="outline-primary">GitHub - Front-End</Button>
                        <Button href="https://github.com/TheGalekxy/SmartBrain" size="lg" target="_blank" block variant="outline-primary">Github - Back-End</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ComingSoon} />
                    <Card.Body className="cardPadding">
                    <Card.Title> </Card.Title>
                    <Card.Text class="text-muted">
                       
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/#" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="/#" size="lg" block variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
            
            </div>
        )
    } 
  }
  
  export default Projects;
  