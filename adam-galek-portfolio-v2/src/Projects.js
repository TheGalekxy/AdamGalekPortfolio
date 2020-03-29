import React, { Component } from 'react';
import "./Projects.css";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import StarWars from './StarWarsApi.PNG';
import ComingSoon from './coming-soon-1.jpg';
import photo3 from './waves.jpg';
import Button from 'react-bootstrap/Button'



class Projects extends Component {
    render() {
        return (
            <div>
            <CardDeck id="CardMargins">
                <Card>
                    <Card.Img variant="top" src={StarWars} />
                    <Card.Body>
                    <Card.Title>StarWars API Project</Card.Title>
                    <Card.Text>
                        This is a project that retrieves and displayes information from a StarWars RESTish API.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/#" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="/#" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ComingSoon} />
                    <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href="/#" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="/#" size="lg" block variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={ComingSoon} />
                    <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                       
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
  