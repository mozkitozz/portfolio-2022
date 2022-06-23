import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="gauche">
        <p>©2022</p>
      </div>
      <div id="droite">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mateo-m-145574178/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mozkitozz"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="mailto:mateo.mons@epitech.eu?subject=test &body=ecrire ici"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li>Phone : 06 52 97 23 30</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
