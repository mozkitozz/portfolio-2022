import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div>
          <ul>
            <li>
              <a href="https://github.com/mozkitozz/" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mateo-m-145574178/" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="mateo.mons@epitech.eu" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/undefined/gmail--v1.png" alt="email"/>
              </a>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
