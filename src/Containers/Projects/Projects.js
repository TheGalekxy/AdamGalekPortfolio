import React, { Component } from 'react';
import "./Projects.css";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import StarWars from './StarWarsApi.PNG';
import SmartBrain from './SmartBrain.png';
import PortfolioImage from './portfolioSiteImage.png';
import ComingSoon from './coming-soon-1.jpg';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ReactImage from './React100.png';
import JavascriptImage from './Javascript96.png';
import CssImage from './CSS96.png';
import HtmlImage from './Html96.png';
import PostGresImage from './PostgresQL96.png';
import NpmImage from './Npm96.png';
import NodeJSImage from './NodeJS96.png';
import BootstrapImage from './Bootstrap96.png';
import NHL from './NHLapi.png';
import Generator from './backgroundGenerator.png';
import Todo from './todoList.png';




class Projects extends Component {
    render() {
        return (
            <div className='projects-section' id='projects'>
            <h1 class="display-4"> Projects & Skills</h1>
            <CardDeck id="CardMargins">
                <Card>
                <Card.Header as="h4">StarWars API Project</Card.Header>
                    <Card.Img variant="top" src={StarWars} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4">StarWars API Project</Card.Title> */}
                    <Card.Text class="text-muted">
                        This is a project that retrieves and displayes information from a StarWars RESTish API and allows the user to search and filter through Characters in the StarWars Universe. 
                            
                    </Card.Text>
                    <Card.Text class="text-muted">
                        The information being accessed via the API is displayed on each character card with the robot image changing based on the species of the character.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} rounded />
                        <Image src={CssImage} rounded />
                        <Image src={JavascriptImage} rounded />
                        <Image src={ReactImage} rounded />
                        <Image src={NpmImage} rounded />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="https://thegalekxy.github.io/StarWarsApi/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/StarWarsApi" target="_blank" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Header as="h4">SmartBrain Full-Stack Application</Card.Header>
                    <Card.Img variant="top" src={SmartBrain} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4" > SmartBrain Full-Stack Application </Card.Title> */}
                    <Card.Text class="text-muted">
                
                            This is a full-stack facial recognition application that was completed for "The Complete Web Developer in 2020: Zero to Mastery", a course on Udemy by Andrei Neagoie.
                    </Card.Text>
                    <Card.Text class='text-muted'>
                    This application, hosted on Heroku, connects a React front-end with a custom PostgreSQL database, and a Node.js + Express server.
                    </Card.Text>

                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} fluid />
                        <Image src={CssImage} fluid />
                        <Image src={JavascriptImage} fluid />
                        <Image src={ReactImage} fluid />
                        <Image src={NodeJSImage} fluid />
                        <Image src={PostGresImage} fluid />
                        <Image src={NpmImage} fluid />
                    </Card.Footer>

                    <Card.Footer>
                        <Button href="https://smart-brain-galek.herokuapp.com/" target="_blank" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/smart-brain-front-end" target="_blank" size="lg" block variant="outline-primary">GitHub - Front-End</Button>
                        <Button href="https://github.com/TheGalekxy/SmartBrain" size="lg" target="_blank" block variant="outline-primary">Github - Back-End</Button>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Header as="h4">Portfolio Site</Card.Header>
                    <Card.Img variant="top" src={PortfolioImage} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4"> Portfolio Site </Card.Title> */}
                    <Card.Text class="text-muted">
                            This is my personal portfolio project which is hosted on GitHub Pages using a custom domain name. 
                            Using a mixture of React-Bootstrap and custom styling to have functionality as well as some differing style. 
                    </Card.Text>
                    <Card.Text class="text-muted">

                        Additionally, the React-scroll npm package was used to give the navigation bar more functionality.
                    </Card.Text>
                    

                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} fluid />
                        <Image src={CssImage} fluid />
                        <Image src={JavascriptImage} fluid />
                        <Image src={ReactImage} fluid />
                        <Image src={BootstrapImage} fluid />
                        <Image src={NpmImage} fluid />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="www.adamgalek.ca" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/AdamGalekPortfolio" size="lg" block variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <CardDeck id="CardMargins">
                <Card>
                <Card.Header as="h4">Gradient Generator</Card.Header>
                    <Card.Img variant="top" src={Generator} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4">StarWars API Project</Card.Title> */}
                    <Card.Text class="text-muted">
                        This is a project that allows the user to randomize a background gradient to their preference.
                        
                            
                    </Card.Text>
                    <Card.Text class="text-muted">
                        Randomization options include: both colours or a single colour, and allows the user to change to their preferred gradient style. Additionally, a click-to-copy feature is implemented to allow for easy use of the created gradient in the users personal code.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} rounded />
                        <Image src={CssImage} rounded />
                        <Image src={JavascriptImage} rounded />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="https://thegalekxy.github.io/GradientGenerator/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/GradientGenerator" target="_blank" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Header as="h4">Todo List</Card.Header>
                    <Card.Img variant="top" src={Todo} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4" > SmartBrain Full-Stack Application </Card.Title> */}
                    <Card.Text class="text-muted">
                        This is a Todo List project created with vanilla javascript and css
                    </Card.Text>
                    <Card.Text class='text-muted'>
                        Features include the ability to add and delete items from a list, toggle 'completed' items, and filter 'completed' 'uncompleted' items from. 
                    </Card.Text>

                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} fluid />
                        <Image src={CssImage} fluid />
                        <Image src={JavascriptImage} fluid />
                    </Card.Footer>

                    <Card.Footer>
                        <Button href="https://thegalekxy.github.io/TodoApp/" target="_blank" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/TodoApp" target="_blank" size="lg" block variant="outline-primary">GitHub </Button>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Header as="h4">NHL API Project</Card.Header>
                    <Card.Img variant="top" src={NHL} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4"> Portfolio Site </Card.Title> */}
                    <Card.Text class="text-muted">
                            This is a project that retrieves the National Hockey League's API and returns a complete and semi-detailed roster of each team.
                    </Card.Text>
                    <Card.Text class="text-muted">
                            Each roster is seperated into teams and only is displayed when their respective teams card is hovered over.
                    </Card.Text>
                    

                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} fluid />
                        <Image src={CssImage} fluid />
                        <Image src={JavascriptImage} fluid />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="https://thegalekxy.github.io/NHLApi/" size="lg" block variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/NHLApi" size="lg" block variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
            
            
            </div>
        )
    } 
  }
  
  export default Projects;
  