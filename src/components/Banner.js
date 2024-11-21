import { useState,useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import react1 from '../assets/images/react-32.png';
import js1 from '../assets/images/js-32.png';
import html1 from '../assets/images/html-32.png';
import css1 from '../assets/images/css-32.png';
import node from '../assets/images/icons8-nodejs-48.png'
import aws from '../assets/images/icons8-aws-24.png'
import '../css/banner.css';
import resume from '../assets/images/resume.pdf';

export const Banner=()=>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate =['Full Stack Developer','Software Developer'];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random()*100);
    const period =2000;
    useEffect(() => {
         let ticker = setInterval(() => {
          tick();
        }, delta);

       return () => { clearInterval(ticker) };
    }, [text]);
    const tick = () =>{
        let i =  loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500); 
        }
    }
return(
    <section className="banner" id='home'>
      <Container>
        <Row>
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="neonText medium">{`Hi I'm Rashi Chourasia`}<span className="wrap"> - {text}</span></h1>
                <p>Seeking opportunities to kick-start my career in technology and gain more and more experience to enhance my skills.</p>
                <a href={resume} download="file"> 
                  <button class="button">Download CV<svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                     <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                      </svg>
                  </button>
                </a>

            </Col>
            <Col xs={12} md={6} xl={5}>
                <div className="cube-container">
                  <div className="cube">
                    <div className="face front">
                       <img src={react1} alt="react" /></div>
                    <div className="face back"> <img src={node} alt="nodejs" /></div>
                     <div className="face right"> <img src={js1} alt="js" /></div>
                    <div className="face left"> <img src={aws} alt="aws" /></div>
                   <div className="face top"> <img src={css1} alt="css" /></div>
                   <div className="face bottom"> <img src={html1} alt="html" /></div>
                 </div>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
)
}