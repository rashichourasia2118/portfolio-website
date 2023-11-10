import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import js from "../assets/images/js-120.png";
import css from "../assets/images/css-120.png";
import html from "../assets/images/html-120.png";
import git from "../assets/images/git-120.png";
import cpp from "../assets/images/cpp-120.png";
import react1 from "../assets/images/react-120.png";
import python from "../assets/images/py-120.png";
import sql from "../assets/images/sql-120.png";
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
                  <img src={cpp} alt="C++ icon" />
                  <h5>C++</h5>
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
                  <img src={python} alt="Python icon" />
                  <h5>PYTHON</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="MYSQL icon" />
                  <h5>MySQL</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
