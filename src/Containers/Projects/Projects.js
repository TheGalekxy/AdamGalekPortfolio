import React, { Component } from 'react';
import "./Projects.css";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import StarWars from './StarWarsApi.PNG';
import SmartBrain from './SmartBrain.png';
import ComingSoon from './coming-soon-1.jpg';
import Button from 'react-bootstrap/Button'



class Projects extends Component {
    render() {
        return (
            <div className='projects-section' id='projects'>
            <h1> Projects </h1>
            <CardDeck id="CardMargins">
                <Card>
                    <Card.Img variant="top" src={StarWars} />
                    <Card.Body>
                    <Card.Title>StarWars API Project</Card.Title>
                    <Card.Text class="text-muted">
                        This is a project that retrieves and displayes information from a StarWars RESTish API.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="https://thegalekxy.github.io/StarWarsApi/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/StarWarsApi" target="_blank" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={SmartBrain} />
                    <Card.Body>
                    <Card.Title> SmartBrain Full Stack Application </Card.Title>
                    <Card.Text class="text-muted">
                        This is the final full-stack project of "The Complete Web Developer in 2020: Zero to Mastery", a course on Udemy by Andrei Neagoie
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="https://smart-brain-galek.herokuapp.com/" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/smart-brain-front-end" size="lg" block variant="outline-primary">Front-End Code</Button>
                        <Button href="https://github.com/TheGalekxy/SmartBrain" size="lg" block variant="outline-primary">Back-End Code</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ComingSoon} />
                    <Card.Body>
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
  