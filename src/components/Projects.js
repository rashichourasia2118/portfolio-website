import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import '../css/projects.css';
import cpp from "../assets/images/cpp-96.png";
import react1 from "../assets/images/react-96.png";
import js from "../assets/images/js-96.png";
import css from "../assets/images/css-96.png";
import html from "../assets/images/html-96.png";
import node from "../assets/images/node-96.png";
import mongo from "../assets/images/mongo-96.png";
import arduino from "../assets/images/arduino-96.png";
import github from "../assets/images/github-32.png";


export const Projects = ()=>{
return(
    <section className="projects" id="projects">
        <Container>
            <Row>
                <Col>
                  <div className="projects-box">
                    <h2 className="neonText">
                        PROJECTS
                    </h2>
                    
                    <div className="project-items">
                    <div className="card">
                      <h2 className="neonText medium">RCKART</h2>
                      <p>Created a responsive e-commerce site from scratch.</p>
                      <div className="icon_link">
                       <div className="projects-icons">
                         <img src={js} alt="hjsd"/>
                         <img src={node} alt=""/>
                         <img src={mongo} alt=""/>
                       </div>
                       <div className="projects-links">
                        <a href="https://github.com/rashichourasia2118/rckart"><img src={github} alt="hjsd"/></a>
                         
                       </div>
                      </div>
                     
                    </div>
                    <div className="card">
                      <h2 className="neonText medium">PERSONAL VOICE ASSISTANT</h2>
                      <p>Developed a C++ voice assistant that executes user commands through voice input.</p>
                      <div className="icon_link">
                      <div className="projects-icons">
                        <img src={cpp} alt=""/>
                       
                      </div>
                      <div className="projects-links">
                        <a href="https://github.com/rashichourasia2118/Personal-voice-Assistant"><img src={github} alt="hjsd"/></a>
                         
                       </div>
                      </div>
                    </div>
                    <div className="card">
                      <h2  className="neonText medium">REACT CHATBOT</h2>
                      <p>Developed a React-based chatbot, showcasing proficiency in
                         frontend development and user interaction</p>
                         <div className="icon_link">
                      <div className="projects-icons">
                        <img src={css} alt=""/>
                        <img src={html} alt=""/>
                        <img src={react1} alt=""/>
                      </div>
                      <div className="projects-links">
                        <a href="https://github.com/rashichourasia2118/react-chatbot"><img src={github} alt="hjsd"/></a>
                         
                       </div>
                      </div>
                    </div>
                    <div className="card">
                      <h2 className="neonText medium">LINE FOLLOWING CAR USING ARDUINO UNO</h2>
                      <p>Led a team of four in an IoT project developing a line-following car.</p>
                      <div className="icon_link">
                      <div className="projects-icons">
                        <img src={arduino} alt=""/>
                        
                      </div>
                      </div>
                    </div>
                    <div className="card">
                      <h2 className="neonText medium">DRAGON WARRIOR GAME</h2>
                      <p>A small Javascript game in which we have to escape from dragon .</p>
                      <div className="icon_link">
                      <div className="projects-icons">
                        <img src={html} alt=""/>
                        <img src={css} alt=""/>
                        <img src={js} alt=""/>
                      </div>
                      <div className="projects-links">
                        <a href="https://github.com/rashichourasia2118/DragonWarriorGame"><img src={github} alt="hjsd"/></a>
                         
                       </div>
                       </div>
                    </div>
                    <div className="card">
                      <h2 className="neonText medium">PERSONAL PORTFOLIO</h2>
                      <p>Personal Portfolio website to know about me.</p>
                      <div className="icon_link">
                      <div className="projects-icons">
                        <img src={html} alt=""/>
                        <img src={css} alt=""/>
                        <img src={react1} alt=""/>
                      </div>
                      <div className="projects-links">
                        <a href="https://github.com/rashichourasia2118/Personal-voice-Assistant"><img src={github} alt="hjsd"/></a>
                         
                       </div>
                       </div>
                    </div>


                    </div>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}