import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contact from '../assets/images/contact-img.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css/contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current,process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
           
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
            <Container>
        <Row className="align-items-center">
          <Col md={6} size={12}>
            <TrackVisibility>
              {({ isVisible }) => <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact} alt="Contact Us" />}
            </TrackVisibility>
          </Col>
          <Col md={6} size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="neonText">Get In Touch</h2>
    <form ref={form} onSubmit={sendEmail}>
    <Row>
      <Col sm={6} classNAme="px-1">
      <input type="text" name="user_name" placeholder="name"/>
      </Col>
      <Col sm={6} classNAme="px-1">
      <input type="email" name="user_email" placeholder='email' />
      </Col>
      <Col>
      <textarea rows="6" name="message" placeholder="Type your message here" />
      <button className="contact-btn" type="submit">
                              <strong>Send</strong>
                               <div id="container-stars">
                                 <div id="stars"></div>
                               </div>

                              <div id="glow">
                              <div class="circle"></div>
                               <div class="circle"></div>
                                </div>
                               </button>
      </Col>
      </Row>
    </form>
    </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};