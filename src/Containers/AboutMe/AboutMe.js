import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import AdamPhoto from '../AboutMe/Adam2.jpg';
import './AboutMe.css';




class AboutMe extends Component {
    render() {
        return (
            <div className='about-section' id='about'>
                <Jumbotron className="text-center">
                <h1 class="display-4">Hello, world! I'm Adam.</h1>
                

                <Image src={AdamPhoto} fluid className="image"/>

                <p>
                    <br></br>

                    Adam is a full-stack web developer with a background in anthropology & archaeology. Using his experience in anthropology as a foundation, Adam strives to create web applications that focus on the human behind the screen whether that means adding alt attributes to every HTML &lt;img&gt; tag to meet accessibility standards, altering CSS to be pixel perfect, or implementing JavaScript functionality improvements. He is excited to keep learning and looks forward to working through the upcoming challenges on his web development journey.
                    
                </p>

            </Jumbotron>
            </div>
        )
    } 
  }
  
  export default AboutMe;
  