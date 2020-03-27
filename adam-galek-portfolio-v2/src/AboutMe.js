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
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                    
                </p>

                <Image src={AdamPhoto} fluid />

                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        )
    } 
  }
  
  export default AboutMe;
  