import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import AdamPhoto from './Adam2.png';




class AboutMe extends Component {
    render() {
        return (
            <Jumbotron className="text-center">
                <h1>Hello, world! I'm Adam.</h1>
                

                <Image src={AdamPhoto} fluid />

                <p>
                    <br></br>
                    With a background in anthropology, I am a self-taught web developer that approaches problems with a holistic perspective allowing me to solve problems in an effective way.

                    
                </p>

                <p>
                    <br></br>
                    <Button href="/#" variant="primary">Find my resume here.</Button>
                </p>
            </Jumbotron>
        )
    } 
  }
  
  export default AboutMe;
  