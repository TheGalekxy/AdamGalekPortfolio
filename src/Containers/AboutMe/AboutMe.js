import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import AdamPhoto from './Adam2.png';




class AboutMe extends Component {
    render() {
        return (
            <div className='about-section' id='about'>
                <Jumbotron className="text-center">
                <h1 class="display-4">Hello, world! I'm Adam.</h1>
                

                <Image src={AdamPhoto} fluid />

                <p>
                    <br></br>

                    Some of my earliest memories of school were creating my very own Piczo.com website and altering it to my desires. For example, I distinctly remember adding a viewcounter to my page and obsessively checking it every few days. 
                    At that point, my Piczo website was nothing more than an a way to connect with my friends but it had planted a seed. A seed that eventually grew into an strong interest in software and technology.
                    
                </p>
                <p>
                    While my start in elementary school did not lead to me pursuing computer science in university, my interest in the field has always been present.
                    For university, I decided to pursue Anthropology. Essentially, the study of Humans. 
                    This path has led me to have many different exciting experiences, like participating in the Stelida Naxos Archaeological Project, an Archaeological dig on the Greek island of Naxos.
                    As Anthropology is such a broad field, it has allowed me to continue exploring my curiosities, and to constantly be learning new information while evaluating my own perspective on everything.
                    This passion for adventure and knowledge has served me well on my journey into learning all that is involved in web development.

                </p>

                <p> 
                    Furthermore, my Anthropological background has taught me to approach problems from a holistic perspective which allows me to approach development issues similarly.
                    This often allows me to effectively break down many bugs or issues I face while programming.
                </p>

            </Jumbotron>
            </div>
        )
    } 
  }
  
  export default AboutMe;
  