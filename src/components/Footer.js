import React from "react";
import "../css/footer.css";
import linkedin from "../assets/images/linkedin-32.png";
import github from "../assets/images/github-32.png";
import gmail from "../assets/images/gmail-32.png";


export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        
        <p className="neonText small">
          Made with <span class="heart">&#10084;</span> by Rashi
        </p>
        <ul className="socials">
        <li>
            <a href="mailto:rashichourasia2118@gmail.com" target="_blank">
              <img src={gmail} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rashi-chourasia-b46953203/">
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com/rashichourasia2118">
              <img src={github} alt="" />
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
};
