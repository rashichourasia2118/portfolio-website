import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import js from "../assets/images/js-120.png";
import css from "../assets/images/css-120.png";
import html from "../assets/images/html-120.png";
import git from "../assets/images/git-120.png";
import java from "../assets/images/icons8-java-144.png";
import react1 from "../assets/images/react-120.png";
import aws from "../assets/images/icons8-aws-192.png";
import node from "../assets/images/icons8-nodejs-144.png";
import sql from "../assets/images/sql-120.png";
import express from "../assets/images/icons8-express-js-150.png";
import mongo from "../assets/images/icons8-mongodb-144.png";
import '../css/skills.css';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box">
              <h2 className="neonText">SKILLS</h2>
           
              <div className="skill-items">
              <div className="item">
                  <img src={java} alt="HTML icon" />
                  <h5>JAVA</h5>
                </div>
              <div className="item">
                  <img src={aws} alt="HTML icon" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={node} alt="HTML icon" />
                  <h5>NODE.JS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="HTML icon" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS icon" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="JavaScript icon" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={react1} alt="React icon" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Git icon" />
                  <h5>GIT</h5>
                </div>
                
                <div className="item">
                  <img src={sql} alt="MYSQL icon" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={express} alt="MYSQL icon" />
                  <h5>EXPRESS.JS</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="MYSQL icon" />
                  <h5>MONGODB</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
