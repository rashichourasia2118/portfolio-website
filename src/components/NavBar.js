import { useState,useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
// import { HashLink } from 'react-router-hash-link';
import icon1 from '../assets/images/linkedin-32.png';
import icon2 from '../assets/images/github-32.png';
import icon3 from '../assets/images/leetcode-32.png';
import '../css/navbar.css';


export const NavBar = () =>{
    const [activeLink,setActivelink] = useState('home');
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll',onScroll);
        return ()=>window.removeEventListener('scroll',onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActivelink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled?'scrolled':''}>
      <Container>
        <Navbar.Brand href="#home">
            <p className="sign neonText medium">Rashi</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#resume" className={activeLink==='experience'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('experience')}>Work Experience</Nav.Link>
            <Nav.Link href="#certifications" className={activeLink==='certifications'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('certifications')}>Certifications</Nav.Link>
           
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/rashi-chourasia-b46953203/"><img src={icon1} alt=""/></a>
                <a href="https://github.com/rashichourasia2118"><img src={icon2} alt=""/></a>
                <a href="https://leetcode.com/the_rashichourasia/"><img src={icon3} alt=""/></a>
            </div>
            {/* <HashLink to='#connect'>
                <button className="neonText medium connect-btn"><span >Let’s Connect</span></button>
            </HashLink> */}
          </span> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

