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
import PHPKnights from './PHPKnights.PNG';
import MomsOverMatter from './MomsOverMatter.png';
import JustCook from './JustCook.png';
import LyricsGenerator from './LyricGenerator.PNG';
import NoelSemple from './NoelSemple.PNG';
import Sass from './sass96.png';
import Php from './php80.png';
import Redux from './redux96.png';
import Digitalocean from './digitalocean96.png';
import nginx from './nginx96.png';
import mysql from './mysql96.png';




class Projects extends Component {
    render() {
        return (
            <div className='projects-section' id='projects'>
            <h1 class="display-4"> Projects & Skills</h1>
            <CardDeck id="CardMargins">
                
                <Card>
                    <Card.Header as="h4" className="cardHeader">MomsOverMatter</Card.Header>
                    <Card.Img variant="top" src={MomsOverMatter} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4">StarWars API Project</Card.Title> */}
                    <Card.Text class="text-muted">
                        A web application designed to provide information and resources to women and their families post-partum. 
                            
                    </Card.Text>
                    <Card.Text class="text-muted">
                        I was responsible for redesigning homepape, next steps page, and results page based off Figma designs, required creating customized React component for a drop-down information box. Also responsible for hosting the production website on a Digital Ocean droplet using NGINX.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} rounded />
                        <Image src={CssImage} rounded />
                        <Image src={JavascriptImage} rounded />
                        <Image src={ReactImage} rounded />
                        <Image src={Sass} rounded />
                        <Image src={NodeJSImage} rounded />
                        <Image src={nginx} rounded />
                        <Image src={Digitalocean} rounded />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="https://momsovermatter.ca/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        {/* <Button href="https://github.com/k4iru/discussion" target="_blank" block size="lg" variant="outline-primary">GitHub</Button> */}
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Header as="h4" className="cardHeader">Noel Semple Campaign</Card.Header>
                    <Card.Img variant="top" src={NoelSemple} />
                    <Card.Body className="cardPadding">
                    <Card.Text class="text-muted">
                        A political campaign website designed to connect the political candidate to his riding’s constituents.
                    </Card.Text>
                    <Card.Text class="text-muted">

                        Within a two week period, I was responsible for learning a new language (liquid) and a new technology (NationBuilder) and creating an "About" page based off of provided designs
                    </Card.Text>
                    

                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} fluid />
                        <Image src={Sass} fluid />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="https://www.votenoel.ca/" size="lg" block variant="outline-primary">Live</Button>
                        {/* <Button href="https://github.com/TheGalekxy/AdamGalekPortfolio" size="lg" block variant="outline-primary">GitHub</Button> */}
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header as="h4" className="cardHeader">JustCook (Work In Progress)</Card.Header>
                    <Card.Img variant="top" src={JustCook} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4">StarWars API Project</Card.Title> */}
                    <Card.Text class="text-muted">
                        JustCook is a web application that allows the user to get ingredients delivered right to their door by simply picking a recipe! Our app allows users to quickly search up recipes for meals they want to try online then automatically order the ingredients necessary.
                            
                    </Card.Text>
                    <Card.Text class="text-muted">
                        I was responsible for the implementation of the Shopping Cart Feature, which involved the implementation and use of Redux.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} rounded />
                        <Image src={CssImage} rounded />
                        <Image src={JavascriptImage} rounded />
                        <Image src={ReactImage} rounded />
                        <Image src={Redux} rounded />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="https://justcook.live/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="https://github.com/k4iru/JustCook" target="_blank" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
            
            </CardDeck>
            
            <CardDeck id="CardMargins">
            {/* <Card>
                <Card.Header as="h4">SmartBrain Full-Stack Application</Card.Header>
                    <Card.Img variant="top" src={SmartBrain} />
                    <Card.Body className="cardPadding">
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
                </Card> */}
                <Card className="card">
                    <Card.Header as="h4" className="cardHeader">PHP Knights Movie Tracker</Card.Header>
                    <Card.Img variant="top" src={PHPKnights} />
                    <Card.Body className="cardPadding">
                    {/* <Card.Title class="h4">StarWars API Project</Card.Title> */}
                    <Card.Text class="text-muted">
                    The PHP Knights Movie Tracker is a web application designed to empower the user in the movie watching experience. It allows the user to track all the movies they have watched, get access to movie recommendations, community curated movie lists, and more! 
                            
                    </Card.Text>
                    <Card.Text class="text-muted">
                        I was responsible for the Movie List feature, which allows registered users to see and create custom movie lists. I was also responsible for the Subscription feature, which allows users to pay for our service through PayPal. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} rounded />
                        <Image src={CssImage} rounded />
                        <Image src={JavascriptImage} rounded />
                        <Image src={Php} rounded />
                        <Image src={mysql} rounded />
                        <Image src={Digitalocean} rounded />
                        <Image src={nginx} rounded />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="https://phpknights.ca/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="https://github.com/k4iru/discussion" target="_blank" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
                <Card className="card">
                <Card.Header as="h4" className="cardHeader">Gradient Generator</Card.Header>
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
                {/* <Card>
                <Card.Header as="h4">Todo List</Card.Header>
                    <Card.Img variant="top" src={Todo} />
                    <Card.Body className="cardPadding">
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
                </Card> */}
                <Card className="card">
                <Card.Header as="h4" className="cardHeader">NHL API Project</Card.Header>
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
                </Card >
                {/* <Card>
                <Card.Header as="h4">Portfolio Site</Card.Header>
                    <Card.Img variant="top" src={PortfolioImage} />
                    <Card.Body className="cardPadding">
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
                </Card> */}
                {/* <Card>
                <Card.Header as="h4">StarWars API Project</Card.Header>
                    <Card.Img variant="top" src={StarWars} />
                    <Card.Body className="cardPadding">
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
                </Card> */}
                <Card className="card">
                <Card.Header as="h4" className="cardHeader">PHP Lyrics Generator</Card.Header>
                    <Card.Img variant="top" src={LyricsGenerator} />
                    <Card.Body className="cardPadding">
                    <Card.Text class="text-muted">
                        This is a web application that connects the Spotify API, with the Musixmatch API to allow the user to search for the lyrics of a song.
                            
                    </Card.Text>
                    {/* <Card.Text class="text-muted">
                        This was created using PHP.
                    </Card.Text> */}
                    </Card.Body>
                    <Card.Footer class='technologyIcons'>
                        <Image src={HtmlImage} rounded />
                        <Image src={CssImage} rounded />
                        <Image src={JavascriptImage} rounded />
                        <Image src={Php} rounded />
                        <Image src={Digitalocean} rounded />
                        <Image src={nginx} rounded />
                    </Card.Footer>
                    <Card.Footer>
                        <Button href="http://142.93.158.44/" target="_blank" block size="lg" variant="outline-primary">Live</Button>
                        <Button href="https://github.com/TheGalekxy/LyricsGenerator" target="_blank" block size="lg" variant="outline-primary">GitHub</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
            
            
            </div>
        )
    } 
  }
  
  export default Projects;
  